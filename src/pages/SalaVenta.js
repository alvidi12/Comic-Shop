import React from "react";
import { Link } from "react-router-dom";
import "../styles/SalaVenta.css";

export default function SalaVenta({ producto }) {
  return (
    <div className="pagina-producto-batgirl d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              className="Logo"
              src="/Imagenes/Logo.png"
              alt="Logo"
              width="110"
              height="auto"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="menu"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/nosotros">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productos">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">
                  Contacto
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/inicio-sesion">
                  Inicio Sesión
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/registro">
                  Regístrate
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#miniCarrito"
                >
                  <i className="bi bi-cart-fill"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mini Carrito */}
      <div
        className="offcanvas offcanvas-end carrito"
        tabIndex="-1"
        id="miniCarrito"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Tu Carrito</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
          ></button>
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

      {/* Contenido principal */}
      <main className="flex-grow-1">
        <div className="container my-5">
          <div className="barra-titulo">
            <h1>{producto.titulo}</h1>
            <Link to="/productos" className="btn-retroceder">
              Retroceder
            </Link>
          </div>

          <div className="contenido">
            <div className="grid-tarjetas">
              <div className="tarjeta">
                <img src={producto.imagen} alt={producto.nombre} />

                <div className="tarjeta-texto">
                  <h3 className="fw-bold">{producto.nombre}</h3>
                  <h4>
                    Clasificación:
                    <span className="item">{producto.clasificacion}</span>
                  </h4>
                  <h4>
                    Nombre alternativo:
                    <span className="item">{producto.nombreAlternativo}</span>
                  </h4>
                  <h4>
                    Autor(es):<span className="item">{producto.autor}</span>
                  </h4>
                  <h4>
                    Artista(s):<span className="item">{producto.artista}</span>
                  </h4>
                  <h4>
                    Género:<span className="item">{producto.genero}</span>
                  </h4>
                  <h4>
                    Tipo:<span className="item">{producto.tipo}</span>
                  </h4>
                  <h4>
                    Estado:<span className="item">{producto.estado}</span>
                  </h4>

                  <h5>{producto.descripcion}</h5>

                  <h2>
                    {producto.precio.toLocaleString("es-CL")} CLP{" "}
                    <button
                      className="btn btn-carrito-agregar"
                      data-nombre={producto.nombre}
                      data-precio={producto.precio}
                    >
                      COMPRAR
                    </button>
                  </h2>
                </div>
              </div>
            </div>

            <div
              id="mensaje-alerta"
              className="alert alert-success text-center d-none"
              role="alert"
            >
              Producto seleccionado
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-white text-center py-4 mt-5">
        <Link to="/contacto" className="btn btn1">
          Contáctanos
        </Link>
        <p>&copy; Todos los derechos reservados 😸</p>
      </footer>
    </div>
  );
}
