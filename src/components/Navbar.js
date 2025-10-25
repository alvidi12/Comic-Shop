import { useContext, useEffect, useRef, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Components.css";
import * as bootstrap from "bootstrap";

export default function Navbar() {
  const { carrito, total } = useContext(CarritoContext);
  const navigate = useNavigate();

  //controlar offcanvas y el botón que lo abre
  const offcanvasRef = useRef(null);
  const toggleBtnRef = useRef(null);

  //estados para evitar cierres/aberturas en mitad de animaciones
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  //inicializar instancia de Bootstrap y manejar clic fuera de manera robusta
  useEffect(() => {
    const el = offcanvasRef.current;
    if (!el) return;

    const instance = bootstrap.Offcanvas.getOrCreateInstance(el);

    const onShow = () => { setIsAnimating(true); };
    const onShown = () => { setIsAnimating(false); setIsOpen(true); };
    const onHide = () => { setIsAnimating(true); };
    const onHidden = () => { setIsAnimating(false); setIsOpen(false); };

    el.addEventListener("show.bs.offcanvas", onShow);
    el.addEventListener("shown.bs.offcanvas", onShown);
    el.addEventListener("hide.bs.offcanvas", onHide);
    el.addEventListener("hidden.bs.offcanvas", onHidden);

    //usar 'pointerdown' mejora la fiabilidad frente a bubbling tardío de 'click'
    const handlePointerDown = (evt) => {
      if (!isOpen || isAnimating) return;

      const path = evt.composedPath ? evt.composedPath() : null;
      const target = evt.target;

      //si el clic fue dentro del offcanvas, no cerramos
      const clickedInsideOffcanvas =
        el.contains(target) || (path && path.includes(el));
      if (clickedInsideOffcanvas) return;

      //si el clic fue en el botón que abre el carrito, no cerramos
      const toggleEl = toggleBtnRef.current;
      const clickedToggle =
        toggleEl &&
        (toggleEl.contains(target) || (path && path.includes(toggleEl)));
      if (clickedToggle) return;

      //cierre seguro
      instance.hide();
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      el.removeEventListener("show.bs.offcanvas", onShow);
      el.removeEventListener("shown.bs.offcanvas", onShown);
      el.removeEventListener("hide.bs.offcanvas", onHide);
      el.removeEventListener("hidden.bs.offcanvas", onHidden);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen, isAnimating]);

  const irACheckout = () => {
    //cierre controlado antes de navegar
    const el = offcanvasRef.current;
    if (el) {
      const inst = bootstrap.Offcanvas.getInstance(el) || bootstrap.Offcanvas.getOrCreateInstance(el);
      inst.hide();
    }
    navigate("/checkout");
  };

  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div className="navbarComponent">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img className="Logo" src="/Imagenes/Logo.png" alt="Logo" width="110" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="menu">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><Link className="nav-link active" to="/nosotros">Nosotros</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/productos">Productos</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/blog">Blogs</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/contacto">Contacto</Link></li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item"><Link to="/login" className="nav-link">Inicio Sesión</Link></li>
              <li className="nav-item"><Link to="/register" className="nav-link">Regístrate</Link></li>
              <li className="nav-item">
                <button
                  ref={toggleBtnRef}
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
            </ul>
          </div>
        </div>
      </nav>

      {/*Mini Carrito */}
      <div
        ref={offcanvasRef}
        className="offcanvas offcanvas-end carrito"
        data-bs-backdrop="false"
        data-bs-scroll="true"      
        tabIndex="-1"
        id="miniCarrito"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Tu Carrito</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
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
                      <td>${(item.precio * item.cantidad).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="text-end fw-bold mb-2">
                Total: ${total.toLocaleString()}
              </div>

              <div className="d-grid">
                <button onClick={irACheckout} className="btn btn-carrito mt-3">
                  Continuar compra
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
