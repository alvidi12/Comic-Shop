import React from "react";
import "../index.css";

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img
              className="Logo"
              src="/Imagenes/Logo.png"
              alt="Logo"
              width="110"
              height="auto"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="menu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/HTMLs/inicioSesion.html">
                  Inicio Sesión
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/HTMLs/registro.html">
                  Regístrate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="container">
        <div className="main-title text-center mt-4">
          <h1 className="fw-bold text-shadow">¡Bienvenido a ComicShop!</h1>
          <p className="shadow">
            ¡Descubre nuevos cómics del universo de DC con increíbles personajes
            que harán volar tu imaginación!
          </p>
        </div>

        {/* Carrusel de tarjetas */}
        <div className="cards-section mt-5">
          <div className="cards-container d-flex flex-wrap justify-content-center gap-3">
            {/* TARJETA 1 */}
            <div
              className="card card1"
              onClick={() => (window.location.href = "/HTMLs/Nosotros.html")}
            >
              <div className="card-content">
                <div className="card-title">Nosotros</div>
                <div className="card-description">Conócenos</div>
              </div>
            </div>

            {/* TARJETA 2 */}
            <div
              className="card card2"
              onClick={() => (window.location.href = "/HTMLs/productos.html")}
            >
              <div className="card-content">
                <div className="card-title">Nuestros productos</div>
                <div className="card-description">Lectura - Cómics</div>
              </div>
            </div>

            {/* TARJETA 3 */}
            <div
              className="card card3"
              onClick={() => (window.location.href = "/HTMLs/blog.html")}
            >
              <div className="card-content">
                <div className="card-title">Blogs</div>
                <div className="card-description">
                  Descubre las nuevas noticias
                </div>
              </div>
            </div>

            {/* TARJETA 4 */}
            <div
              className="card card4"
              onClick={() => (window.location.href = "/HTMLs/contacto.html")}
            >
              <div className="card-content">
                <div className="card-title">Contáctanos</div>
                <div className="card-description">Envíanos tus dudas</div>
              </div>
            </div>
          </div>
        </div>

        {/* Imagen de portada */}
        <section className="tarjeta-portada mt-5 text-center">
          <div className="portada-container">
            <div className="info-section">
              <h2>Nuestros Servicios</h2>
              <p>
                Ofrecemos una gran variedad de cómics del mundo de DC, con
                personajes históricos y otros que regresan con historias épicas.
              </p>
            </div>
            <img src="./Imagenes/portada.png" alt="portada" />
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-white text-center py-4 mt-5 bg-dark">
        <button className="btn btn1" onClick={() => (window.location.href = "/HTMLs/contacto.html")}>Contáctanos</button>
        <p className="mt-3">&copy; Todos los derechos reservados 😸</p>
      </footer>
    </div>
  );
}

export default Home;
