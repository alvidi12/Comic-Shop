import React from 'react';
import styles from '../styles/blogSinMov.css';

export const BlogDCComic = () => {
  return (
    <div className="blog-detail-container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img className="Logo" src="/Imagenes/Logo.png" alt="Logo" width="110" height="auto" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="menu">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><a className="nav-link active" href="/nosotros">Nosotros</a></li>
              <li className="nav-item"><a className="nav-link active" href="/productos">Productos</a></li>
              <li className="nav-item"><a className="nav-link active" href="/blog">Blogs</a></li>
              <li className="nav-item"><a className="nav-link active" href="/contacto">Contacto</a></li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link active" href="/login">Inicio Sesión</a></li>
              <li className="nav-item"><a className="nav-link active" href="/registro">Registrate</a></li>
              <li className="nav-item"><a className="nav-link active" href="#" data-bs-toggle="offcanvas" data-bs-target="#miniCarrito"><i className="bi bi-cart-fill"></i></a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mini Carrito */}
      <div className="offcanvas offcanvas-end carrito" tabIndex="-1" id="miniCarrito">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Tu Carrito</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <table className="table table-dark table-striped table-sm">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody id="carrito-body"></tbody>
          </table>
          <div className="d-grid">
            <button className="btn btn-carrito mt-3">Comprar</button>
          </div>
        </div>
      </div>

      {/* Contenido del Blog */}
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <div className="card mb-4 mt-5 card-personalizada">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <img className="card-img" src="/Imagenes/new-history-of-dc-universe-1_portada-simple.jpg" alt="Imagen" />
                </div>
                <div className="col-md-6">
                  <div className="card-lobby d-flex flex-column justify-content-center p-4">
                    <h5 className="card-title fw-bold">¡CONOCE LA HISTORIA DEFINITIVA DEL UNIVERSO DC!</h5>
                    <p className="card-text">Para celebrar los 90 años de DC, el superfan y escritor Mark Waid retrocede en el tiempo hasta los inicios del Universo DC en una miniserie de cuatro números dibujada por algunos de los mejores artistas de DC y narrada por Barry Allen, el Relámpago.</p>
                    <p>Una de las mejores cosas que tienen los universos superheroicos es la idea de historia compartida con una cronología lineal que afecta a todos los héroes de ese mundo. En el caso de DC Comics esta cronología puede ser un poco complicada, dados los diferentes reinicios que ha tenido su continuidad desde 1986.</p>
                    <p>Waid es el artífice de mi retorno a DC Comics. Gracias a su buen hacer junto a artistas como Dan Mora ha ido creando historias que recordaron lo que molan los personajes de DC cuando se usan bien. El conocimiento enciclopédico de Waid y su gusto por la historia y la continuidad le convierten en el hombre adecuado para este trabajo.</p>
                    <a href="/blog" className="btn mt-auto">Volver</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-white text-center py-4 mt-5">
        <button className="btn btn1" onClick={() => window.location.href='/contacto'}>Contáctanos</button>
        <p>&copy; Todos los derechos reservados😸</p>
      </footer>
    </div>
  );
};