// NavbarAdmin.js
import { Link, useNavigate } from "react-router-dom";
import "../styles/Components.css";

export default function NavbarAdmin() {
  const navigate = useNavigate();

  // Función para cerrar sesión
  const cerrarSesion = () => {
    localStorage.removeItem("usuarioRol"); // Eliminamos el rol
    navigate("/"); // Redirigimos al inicio del usuario normal
  };

  return (
    <div className="navbarComponent">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          {/* Logo redirige a dashboard admin */}
          <Link to="/admin-panel" className="navbar-brand">
            <img className="Logo" src="/Imagenes/Logo.png" alt="Logo" width="90" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuAdmin"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="menuAdmin">
            {/* Menú central: solo "Inicio" */}
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/admin-panel">
                  Inicio
                </Link>
              </li>
            </ul>

            {/* Botón cerrar sesión */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  onClick={cerrarSesion}
                  className="btn btn-danger nav-link px-3"
                  style={{ cursor: "pointer" }}
                >
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
