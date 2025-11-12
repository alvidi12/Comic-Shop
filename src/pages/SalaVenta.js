import React, { useContext, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import "../styles/SalaVenta.css";

export default function SalaVenta() {
  const { agregarAlCarrito } = useContext(CarritoContext);
  const location = useLocation();
  const [producto, setProducto] = useState(null);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  useEffect(() => {
    if (location.state?.producto) {
      setProducto(location.state.producto);
    } else {
      const raw = localStorage.getItem("productos");
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setProducto(parsed[0]);
          }
        } catch {}
      }
    }
  }, [location.state]);

  const handleComprar = () => {
    if (!producto) return;
    agregarAlCarrito({
      id: producto.id,
      nombre: producto.nombre,
      precio: Number(producto.precio),
      imagen: producto.imagen,
    });
    setMostrarAlerta(true);
    setTimeout(() => setMostrarAlerta(false), 2000);
  };

  if (!producto) return null;

  return (
    <div className="pagina-producto d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <div className="container my-5">
          <div className="barra-titulo">
            <h1>{producto.titulo}</h1>
            <Link to="/productos" className="btn-retroceder">
              Retroceder
            </Link>
          </div>

          {/* Estructura original controlada por CSS */}
          <div className="tarjeta">
            <img src={producto.imagen} alt={producto.nombre} />

            <div className="tarjeta-texto">
              <h3 className="fw-bold">{producto.nombre}</h3>
              <h4>
                Clasificación:<span className="item">{producto.clasificacion}</span>
              </h4>
              <h4>
                Nombre alternativo:<span className="item">{producto.nombreAlternativo}</span>
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
                {Number(producto.precio).toLocaleString("es-CL")} CLP{" "}
                <button className="btn btn-carrito-agregar" onClick={handleComprar}>
                  COMPRAR
                </button>
              </h2>
            </div>
          </div>

          {/* Mensaje temporal de confirmación */}
          <div
            id="mensaje-alerta"
            className={`alert alert-success text-center ${mostrarAlerta ? "" : "d-none"}`}
            role="alert"
          >
            Producto agregado al carrito
          </div>
        </div>
      </main>
    </div>
  );
}
