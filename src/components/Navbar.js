import { useContext, useEffect, useRef, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Components.css";
import * as bootstrap from "bootstrap";

export default function Navbar() {
  const { carrito } = useContext(CarritoContext);
  const navigate = useNavigate();

  // ------------------ SESIÓN con MongoDB ------------------
  const [sesionIniciada, setSesionIniciada] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setSesionIniciada(false);
      return;
    }

    const validarSesion = async () => {
      try {
        const res = await fetch("https://TU_BACKEND/api/auth/validate", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          setSesionIniciada(true);
        } else {
          localStorage.removeItem("token");
          setSesionIniciada(false);
        }
      } catch (err) {
        localStorage.removeItem("token");
        setSesionIniciada(false);
      }
    };

    validarSesion();
  }, []);

  // ------------------ Cerrar Sesión ------------------
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    setSesionIniciada(false);
    closeMenu();
    navigate("/");
  };

  // ------------------ REFERENCIAS NAV ------------------
  const menuRef = useRef(null);
  const navRef = useRef(null);
  const togglerRef = useRef(null);

  const [navCollapse, setNavCollapse] = useState(null);

  // ------------------ Inicializar Collapse ------------------
  useEffect(() => {
    const menuEl = menuRef.current;
    if (!menuEl) return;

    const collapse = bootstrap.Collapse.getOrCreateInstance(menuEl, {
      toggle: false,
    });

    setNavCollapse(collapse);
  }, []);

  // ------------------ Cerrar menú al hacer click fuera ------------------
  useEffect(() => {
    const handler = (evt) => {
      const nav = navRef.current;
      const toggle = togglerRef.current;

      if (!navCollapse) return;

      const insideNav = nav?.contains(evt.target);
      const isToggle = toggle?.contains(evt.target);

      if (insideNav || isToggle) return;

      if (menuRef.current?.classList.contains("show")) {
        navCollapse.hide();
      }
    };

    document.addEventListener("pointerdown", handler);

    return () => document.removeEventListener("pointerdown", handler);
  }, [navCollapse]);

  // ------------------ Controles del menú ------------------
  const closeMenu = () => navCollapse?.hide();
  const toggleMenu = () => navCollapse?.toggle();

  // ------------------ Carrito ------------------
  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div className="navbarComponent">
      <nav ref={navRef} className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">

          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <img className="Logo" src="/Imagenes/Logo.png" alt="Logo" width="90" />
          </Link>

          <button
            ref={togglerRef}
            className="navbar-toggler"
            type="button"
            aria-controls="menu"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div ref={menuRef} className="collapse navbar-collapse justify-content-between" id="menu">
            {/* MENÚ CENTRAL */}
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><Link className="nav-link active" to="/nosotros" onClick={closeMenu}>Nosotros</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/productos" onClick={closeMenu}>Productos</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/blog" onClick={closeMenu}>Blogs</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/contacto" onClick={closeMenu}>Contacto</Link></li>
            </ul>

            {/* LADO DERECHO */}
            <ul className="navbar-nav">

              {/* VISUAL SEGÚN SESIÓN */}
              {!sesionIniciada && (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link" onClick={closeMenu}>
                      Inicio Sesión
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link" onClick={closeMenu}>
                      Regístrate
                    </Link>
                  </li>
                </>
              )}

              {sesionIniciada && (
                <li className="nav-item">
                  <span
                    className="nav-link active"
                    style={{ cursor: "pointer" }}
                    onClick={cerrarSesion}
                  >
                    Cerrar Sesión
                  </span>
                </li>
              )}

              {/* ICONO CARRITO */}
              <li className="nav-item">
                <button
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
    </div>
  );
}
