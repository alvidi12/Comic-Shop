import React from "react";
import { Link } from "react-router-dom";
import "../styles/SalaVenta.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SalaVenta({ producto }) {
  return (
    <div className="pagina-producto d-flex flex-column min-vh-100">
      <Navbar />

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

      <Footer />
    </div>
  );
}
