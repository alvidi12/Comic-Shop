// src/pages/Productos.js
import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Productos() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img className="Logo" src="/Imagenes/Logo.png" alt="Logo" width="110" />
          </Link>

          <div className="collapse navbar-collapse justify-content-between" id="menu">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><Link className="nav-link" to="/nosotros">Nosotros</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/productos">Productos</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/blog">Blogs</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container my-5">
        {/* --- tarjeta de inicio (igual que Home) visible en la página Productos --- */}
        <div className="text-center mb-4">
          <div className="cards-container d-flex justify-content-center">
            <Link to="/productos" className="card card2 d-inline-block" aria-label="Nuestros productos">
              <div className="card-content p-4">
                <div className="card-title h5">Nuestros productos</div>
                <div className="card-description">Lectura - Cómics</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Cabecera */}
        <div className="text-center mb-5">
          <h1 className="titulo">¡ Hecha un vistazo a nuestras ediciones limitadas !</h1>
          <p className="subtitulo">Nada más confortable que saber los orígenes...</p>
        </div>

        {/* Grid de productos — tus tarjetas */}
        <div className="contenido">
          <h2>Productos</h2>
          <div className="grid-tarjetas">
            {/* ...tus tarjetas con Link dentro de cada tarjeta ... */}
            <div className="tarjeta">
              <img src="https://static.dc.com/2025-08/SM_Cv29_02911_DIGITAL.jpg?w=640" alt="superman" />
              <h3>LA SAGA DE SUPERMAN</h3>
              <Link to="/productos/superman" className="tarjeta-link" aria-label="Ver LA SAGA DE SUPERMAN" />
            </div>
            {/* copia el resto como en tu HTML */}
          </div>
        </div>
      </div>

      <footer className="text-white text-center py-4 mt-5">
        <Link to="/contacto" className="btn btn1">Contáctanos</Link>
        <p className="mt-3">&copy; Todos los derechos reservados 😸</p>
      </footer>
    </>
  );
}
