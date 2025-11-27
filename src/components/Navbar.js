import { useContext, useEffect, useState, useRef } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Components.css";
import * as bootstrap from "bootstrap";

export default function Navbar() {

  const { carrito, total, setCarrito, setTotal } = useContext(CarritoContext);
  const { usuarioCorreo, logout } = useContext(AuthContext);

  const sesionIniciada = !!usuarioCorreo;
  const navigate = useNavigate();

  const [nombreUsuario, setNombreUsuario] = useState("");

  useEffect(() => {
    setNombreUsuario(localStorage.getItem("usuarioNombre") || "");
  }, [usuarioCorreo]);

  const cerrarSesion = () => {
    logout();
    localStorage.removeItem("token");
    localStorage.removeItem("usuarioRol");
    localStorage.removeItem("usuarioNombre");

    setCarrito([]);
    setTotal(0);

    navigate("/");
  };

  // NAVBAR COLLAPSE
  const menuRef = useRef(null);
  const collapseRef = useRef(null);
  const togglerRef = useRef(null);

  useEffect(() => {
    const menuEl = menuRef.current;
    if (!menuEl) return;

    collapseRef.current = bootstrap.Collapse.getOrCreateInstance(menuEl, {
      toggle: false
    });
  }, []);

  const toggleMenu = () => collapseRef.current?.toggle();
  const closeMenu = () => collapseRef.current?.hide();

  useEffect(() => {
    const handler = evt => {
      const menuEl = menuRef.current;
      if (!menuEl || !menuEl.classList.contains("show")) return;
      if (menuEl.contains(evt.target)) return;
      if (togglerRef.current?.contains(evt.target)) return;
      collapseRef.current?.hide();
    };
    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, []);

  // OFFCANVAS CARRITO
  const offcanvasRef = useRef(null);
  const cartToggleRef = useRef(null);

  useEffect(() => {
    const offEl = offcanvasRef.current;
    if (!offEl) return;

    const offInstance = bootstrap.Offcanvas.getOrCreateInstance(offEl, {
      backdrop: false,
      scroll: true,
      keyboard: true,
    });

    const handler = evt => {
      if (!offEl.classList.contains("show")) return;
      if (offEl.contains(evt.target)) return;
      if (cartToggleRef.current?.contains(evt.target)) return;
      offInstance.hide();
    };

    document.addEventListener("pointerdown", handler);
    return () => {
      document.removeEventListener("pointerdown", handler);
      offInstance.hide();
    };
  }, []);

  const cerrarCarrito = () => {
    const offEl = offcanvasRef.current;
    const instance = bootstrap.Offcanvas.getInstance(offEl);
    instance?.hide();
  };

  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div className="navbarComponent">

      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">

          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <img className="Logo" src="/Imagenes/Logo.png" alt="Logo" width="90" />
          </Link>

          <button
            ref={togglerRef}
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="menu"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div ref={menuRef} className="collapse navbar-collapse justify-content-between" id="menu">

            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><Link className="nav-link active" to="/nosotros" onClick={closeMenu}>Nosotros</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/productos" onClick={closeMenu}>Productos</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/blog" onClick={closeMenu}>Blog</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/contacto" onClick={closeMenu}>Contacto</Link></li>
            </ul>

            <ul className="navbar-nav">

              {!sesionIniciada && (
                <>
                  <li className="nav-item"><Link className="nav-link" to="/login" onClick={closeMenu}>Inicio Sesión</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/register" onClick={closeMenu}>Regístrate</Link></li>
                </>
              )}

              {sesionIniciada && (
                <li className="nav-item d-flex align-items-center">
                  <span className="nav-link text-warning fw-bold me-2 nombre-escritorio">{nombreUsuario}</span>
                  <span
                    className="nav-link active"
                    style={{ cursor: "pointer" }}
                    onClick={() => { closeMenu(); cerrarSesion(); }}>
                    Cerrar Sesión
                  </span>
                </li>
              )}

              <li className="nav-item">
                <button
                  ref={cartToggleRef}
                  className="nav-link active btn border-0 bg-transparent p-0"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#miniCarrito"
                >
                  <i className="bi bi-cart-fill"></i>
                  {cantidadTotal > 0 && (
                    <span className="ms-1 badge bg-secondary">{cantidadTotal}</span>
                  )}
                </button>
              </li>

              {sesionIniciada && (
                <div className="nombre-usuario-responsive d-lg-none">
                  {nombreUsuario}
                </div>
              )}

            </ul>

          </div>
        </div>
      </nav>

      {/* OFFCANVAS DEL CARRITO */}
      <div
        ref={offcanvasRef}
        className="offcanvas offcanvas-end carrito"
        tabIndex="-1"
        id="miniCarrito"
        data-bs-backdrop="false"
      >

        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Tu Carrito</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body">

          {carrito.length === 0 ? (
            <p className="text-muted">El carrito está vacío</p>
          ) : (
            <>
              <table className="table table-dark table-striped table-sm">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cant.</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.map(item => (
                    <tr key={item.id}>
                      <td>{item.nombre}</td>
                      <td>{item.cantidad}</td>
                      <td>${(item.precio * item.cantidad).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="text-end fw-bold mb-2">
                Total: ${total.toLocaleString()}
              </div>

              <button
                className="btn btn-carrito mt-3 w-100"
                onClick={() => {
                  cerrarCarrito();
                  navigate("/checkout");
                }}
              >
                Continuar compra
              </button>

            </>
          )}

        </div>

      </div>

    </div>
  );
}
