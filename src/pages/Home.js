import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    {/* Logo */}
    <Link to="/" className="navbar-brand">
      <img className="Logo" src="/Imagenes/Logo.png" alt="Logo" width="110" />
    </Link>

    {/* Botón hamburguesa */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#menu"
      aria-controls="menu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Contenido colapsable */}
    <div className="collapse navbar-collapse justify-content-end" id="menu">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/login">Inicio Sesión</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/registro">Regístrate</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


      {/*TARJETAS CENTRADAS */}
      <div className="cards-section mt-5">
        <div className="cards-container d-flex flex-wrap justify-content-center align-items-center gap-4">
          {/* TARJETA 1 */}
          <div className="card card1" onClick={() => navigate("/nosotros")} role="button" tabIndex={0}>
            <div className="card-content">
              <div className="card-title">Nosotros</div>
              <div className="card-description">Conócenos</div>
            </div>
          </div>

          {/* TARJETA 2 */}
          <div className="card card2" onClick={() => navigate("/productos")} role="button" tabIndex={0}>
            <div className="card-content">
              <div className="card-title">Nuestros productos</div>
              <div className="card-description">Lectura - Cómics</div>
            </div>
          </div>

          {/* TARJETA 3 */}
          <div className="card card3" onClick={() => navigate("/blog")} role="button" tabIndex={0}>
            <div className="card-content">
              <div className="card-title">Blogs</div>
              <div className="card-description">Descubre las nuevas noticias</div>
            </div>
          </div>

          {/* TARJETA 4 */}
          <div className="card card4" onClick={() => navigate("/contacto")} role="button" tabIndex={0}>
            <div className="card-content">
              <div className="card-title">Contáctanos</div>
              <div className="card-description">Envíanos tus dudas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Portada */}
      <section className="tarjeta-portada mt-5 text-center">
        <div className="portada-container">
          <div className="info-section">
            <h2>Nuestros Servicios</h2>
            <p>Ofrecemos una gran variedad de cómics del mundo de DC...</p>
          </div>
          <img src="/Imagenes/portada.png" alt="portada" />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white text-center py-4 mt-5">
        <button className="btn1" onClick={() => navigate("/contacto")}>Contáctanos</button>
        <p className="mt-3">&copy; Todos los derechos reservados 😸</p>
      </footer>
    </div>
  );
}

export default Home;
