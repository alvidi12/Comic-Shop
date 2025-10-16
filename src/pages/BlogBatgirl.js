import React from 'react';
import styles from '../styles/blogSinMov.css';

export const BlogBatgirl = () => {
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
                  <img className="card-img" src="/Imagenes/Cassandra Cain Icon (DC Comics).jpg" alt="Imagen" />
                </div>
                <div className="col-md-6">
                  <div className="card-lobby d-flex flex-column justify-content-center p-4">
                    <h5 className="card-title fw-bold">Después de 2 décadas Cassandra Cain vuelve como BATGIRL!</h5>
                    <p className="card-text">«Because I'm Batgirl. And no one, not even my mother, will ever take this from me»</p>
                    <p>Una nueva cabecera de Batgirl es una buena noticia, pues no teníamos ninguna desde la pasada Batgirls. En los últimos años hemos visto como el manto se ha repartido entre Barbara Gordon, Stephanie Brown y Cassandra Cain. Barbara fue la batgirl original y la que estuvo dos décadas como la única.</p>
                    <p>En todo ese tiempo no tuvo una serie principal con su nombre, siendo relegada a tener secciones o apariciones regulares en series como Detective Comics o Batman Family. La primera serie regular de Batgirl fue con Cassandra Cain, donde comenzó guionizándola Kelley Puckett y que acabó con Chuck Dixon. Una serie juvenil que marcó un antes y un después.</p>
                    <p>Si queréis leer este nuevo número uno, es importante que comprendáis la importancia de las historias contenidas en este primer volumen. La acción y la narrativa parten de que conoces al personaje de Cassandra Cain y la mitología alrededor suyo. Tate Brombal quiere continuar aportado a la historia del personaje y no tiene miedo de utilizar, desde la primera página, a Lady Shiva.</p>
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
