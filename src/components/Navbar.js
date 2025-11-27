import { useContext, useEffect, useState, useRef } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Components.css";
import * as bootstrap from "bootstrap";

export default function Navbar() {
  const { carrito, total } = useContext(CarritoContext);
  const navigate = useNavigate();
  const location = useLocation();

  // ------------------- SESIÓN -------------------
  const [sesionIniciada, setSesionIniciada] = useState(
    !!localStorage.getItem("usuarioRol")
  );

  const [nombreUsuario, setNombreUsuario] = useState(
    localStorage.getItem("usuarioNombre") || ""
  );

  useEffect(() => {
    setSesionIniciada(!!localStorage.getItem("usuarioRol"));
    setNombreUsuario(localStorage.getItem("usuarioNombre") || "");
  }, [location]);

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuarioRol");
    localStorage.removeItem("usuarioNombre");
    localStorage.removeItem("usuarioCorreo");

    setSesionIniciada(false);
    navigate("/");
  };

  // ------------------- NAVBAR COLLAPSE -------------------
  const menuRef = useRef(null);
  const collapseRef = useRef(null);

  // 💡 NUEVO: referencia al botón hamburguesa
  const togglerRef = useRef(null);

  useEffect(() => {
    const menuEl = menuRef.current;
    if (!menuEl) return;

    // Instancia controlada de Collapse (no usamos data-bs-toggle)
    const instance = bootstrap.Collapse.getOrCreateInstance(menuEl, {
      toggle: false,
    });
    collapseRef.current = instance;
  }, []);

  const toggleMenu = () => {
    if (collapseRef.current) {
      collapseRef.current.toggle();
    }
  };

  const closeMenu = () => {
    if (collapseRef.current) {
      collapseRef.current.hide();
    }
  };

  // 💡 NUEVO: Cerrar NAVBAR al hacer clic fuera (modo responsive)
  useEffect(() => {
    const handlePointerDown = (evt) => {
      const menuEl = menuRef.current;
      if (!menuEl) return;

      // Si el menú no está abierto, no hacemos nada
      if (!menuEl.classList.contains("show")) return;

      const target = evt.target;

      // Si el clic es dentro del menú colapsado → no cerramos
      if (menuEl.contains(target)) return;

      // Si el clic es sobre el botón hamburguesa → no cerramos aquí
      if (togglerRef.current && togglerRef.current.contains(target)) return;

      // Cerramos el menú colapsado
      if (collapseRef.current) {
        collapseRef.current.hide();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  // ------------------- OFFCANVAS CARRITO -------------------
  const offcanvasRef = useRef(null);
  const cartToggleRef = useRef(null);

  useEffect(() => {
    const offEl = offcanvasRef.current;
    if (!offEl) return;

    // Instancia de Offcanvas SIN fondo negro
    const offInstance = bootstrap.Offcanvas.getOrCreateInstance(offEl, {
      backdrop: false,
      scroll: true,
      keyboard: true,
    });

    // Cerrar al hacer clic fuera del carrito
    const handlePointerDown = (evt) => {
      // Si el offcanvas no está visible, no hacemos nada
      if (!offEl.classList.contains("show")) return;

      const target = evt.target;

      // Si el clic es dentro del carrito → no cerramos
      if (offEl.contains(target)) return;

      // Si el clic es en el botón que abre el carrito → no cerramos aquí
      if (cartToggleRef.current && cartToggleRef.current.contains(target)) {
        return;
      }

      offInstance.hide();
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      offInstance.hide();
    };
  }, []);

  const cerrarCarrito = () => {
    const offEl = offcanvasRef.current;
    if (!offEl) return;
    const instance = bootstrap.Offcanvas.getInstance(offEl);
    if (instance) instance.hide();
  };

  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  // ------------------- RENDER -------------------
  return (
    <div className="navbarComponent">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">

          {/* Logo */}
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <img className="Logo" src="/Imagenes/Logo.png" alt="Logo" width="90" />
          </Link>

          {/* Botón hamburguesa */}
          <button
            ref={togglerRef}
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú colapsable */}
          <div
            ref={menuRef}
            className="collapse navbar-collapse justify-content-between"
            id="menu"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/nosotros"
                  onClick={closeMenu}
                >
                  Nosotros
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/productos"
                  onClick={closeMenu}
                >
                  Productos
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/blog"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/contacto"
                  onClick={closeMenu}
                >
                  Contacto
                </Link>
              </li>
            </ul>

            {/* Lado derecho */}
            <ul className="navbar-nav">

              {!sesionIniciada && (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/login"
                      onClick={closeMenu}
                    >
                      Inicio Sesión
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/register"
                      onClick={closeMenu}
                    >
                      Regístrate
                    </Link>
                  </li>
                </>
              )}

              {sesionIniciada && (
                <li className="nav-item d-flex align-items-center">
                  <span className="nav-link text-warning fw-bold me-2 nombre-escritorio">
                    {nombreUsuario}
                  </span>

                  <span
                    className="nav-link active"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      closeMenu();
                      cerrarSesion();
                    }}
                  >
                    Cerrar Sesión
                  </span>
                </li>
              )}

              {/* Botón del carrito */}
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
                    <span className="ms-1 badge bg-secondary">
                      {cantidadTotal}
                    </span>
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

      {/* OFFCANVAS del carrito */}
      <div
        ref={offcanvasRef}
        className="offcanvas offcanvas-end carrito"
        tabIndex="-1"
        id="miniCarrito"
        data-bs-backdrop="false"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Tu Carrito</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
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
                  {carrito.map((item) => (
                    <tr key={item.id}>
                      <td>{item.nombre}</td>
                      <td>{item.cantidad}</td>
                      <td>
                        ${(item.precio * item.cantidad).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="text-end fw-bold mb-2">
                Total: ${total.toLocaleString()}
              </div>

              {/* Continuar compra: cierra carrito y navega */}
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
