import { useEffect, useRef, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as bootstrap from "bootstrap";
import "../styles/Components.css";

import { AuthContext } from "../context/AuthContext";

export default function NavbarAdmin() {
  const navigate = useNavigate();

  // 🔥 Sesión REACTIVA (no existía antes)
  const { usuarioCorreo, logout } = useContext(AuthContext);
  const [nombreUsuario, setNombreUsuario] = useState("");

  // Actualizar nombre cuando cambia sesión
  useEffect(() => {
    setNombreUsuario(localStorage.getItem("usuarioNombre") || "");
  }, [usuarioCorreo]);

  // NAVBAR collapse original
  const menuRef = useRef(null);
  const navRef = useRef(null);
  const togglerRef = useRef(null);
  const collapseRef = useRef(null);

  useEffect(() => {
    const menuEl = menuRef.current;
    if (!menuEl) return;

    collapseRef.current = bootstrap.Collapse.getOrCreateInstance(menuEl, {
      toggle: false,
    });
  }, []);

  // Cerrar al hacer clic fuera (igual que antes)
  useEffect(() => {
    const handler = (evt) => {
      const nav = navRef.current;
      const toggle = togglerRef.current;
      const collapse = menuRef.current;
      const instance = collapseRef.current;

      if (!instance) return;

      const isInsideNav = nav?.contains(evt.target);
      const isToggle = toggle?.contains(evt.target);

      if (isInsideNav || isToggle) return;

      if (collapse?.classList.contains("show")) {
        instance.hide();
      }
    };

    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, []);

  const closeMenu = () => {
    collapseRef.current?.hide();
  };

  const toggleMenu = () => {
    collapseRef.current?.toggle();
  };

  // 🔥 Cerrar sesión REAL (sin romper estilos ni estructura)
  const cerrarSesion = () => {
    logout();

    localStorage.removeItem("token");
    localStorage.removeItem("usuarioRol");
    localStorage.removeItem("usuarioNombre");
    localStorage.removeItem("usuarioCorreo");
    

    // avisar al resto de Navbars
    window.dispatchEvent(new Event("login-change"));

    closeMenu();
    navigate("/");
  };

  return (
    <div className="navbarComponent">
      <nav ref={navRef} className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">

          {/* Logo */}
          <Link to="/admin-panel" className="navbar-brand" onClick={closeMenu}>
            <img className="Logo" src="/Imagenes/Logo.png" alt="Logo" width="90" />
          </Link>

          {/* Botón Hamburguesa */}
          <button
            ref={togglerRef}
            className="navbar-toggler"
            type="button"
            aria-controls="menuAdmin"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú */}
          <div ref={menuRef} className="collapse navbar-collapse justify-content-between" id="menuAdmin">

            {/* Menú central */}
            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
                <Link className="nav-link active" to="/admin-panel" onClick={closeMenu}>
                  Inicio
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/admin-panel/productos-tienda" onClick={closeMenu}>
                  Ver Productos
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/admin-panel/blog-tienda" onClick={closeMenu}>
                  Ver Blogs
                </Link>
              </li>

            </ul>

            {/* Cerrar Sesión */}
            <ul className="navbar-nav">

              {/* 🔥 Mostrar nombre del admin como antes */}
              {usuarioCorreo && (
                <span className="nav-link text-warning fw-bold me-2">
                  {nombreUsuario}
                </span>
              )}

              <li className="nav-item">
                <span
                  className="nav-link active"
                  style={{ cursor: "pointer" }}
                  onClick={cerrarSesion}
                >
                  Cerrar Sesión
                </span>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
}
