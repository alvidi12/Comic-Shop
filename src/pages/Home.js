// src/pages/Home.js
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../index.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar simplificado: usa Link para evitar recarga */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img className="Logo" src="/Imagenes/Logo.png" alt="Logo" width="110" />
          </Link>

          <div className="collapse navbar-collapse justify-content-between" id="menu">
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

      {/* Contenido principal */}
      <div className="cards-container">
        {/* Tarjetas */}
        <div className="cards-section mt-5">
          <div className="cards-container d-flex flex-wrap justify-content-center gap-3">
            {/* TARJETA 1 */}
            <div className="card card1" onClick={() => navigate("/nosotros")} role="button" tabIndex={0}>
              <div className="card-content">
                <div className="card-title">Nosotros</div>
                <div className="card-description">Conócenos</div>
              </div>
            </div>

            {/* TARJETA 2 -> Productos (esta debe navegar a /productos) */}
            <div
              className="card card2"
              onClick={() => navigate("/productos")}
              role="button"
              tabIndex={0}
            >
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
      </div>

      {/* Footer */}
      <footer className="text-white text-center py-4 mt-5">
        <button className="btn1" onClick={() => navigate("/contacto")}>Contáctanos</button>
        <p className="mt-3">&copy; Todos los derechos reservados 😸</p>
      </footer>
    </div>
  );
}

export default Home;
