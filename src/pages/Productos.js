import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Productos.css";

export default function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem("productos");
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setProductos(parsed);
      } catch {
        console.error("Error al leer productos");
      }
    }
  }, []);

  const esNuevo = (fecha) => {
    if (!fecha) return false;
    const diff = Date.now() - new Date(fecha).getTime();
    return diff < 24 * 60 * 60 * 1000; // 24 horas
  };

  return (
    <div className="pagina-productos d-flex flex-column min-vh-100">
      <div className="container my-5">
        <div className="text-center mb-5">
          <h1 className="titulo">¡Hecha un vistazo a nuestras ediciones limitadas!</h1>
          <p className="subtitulo">
            Nada más confortable que saber los orígenes y sucesos de tus personajes favoritos
            al alcance de tus manos ¡QUE ESPERAS!
          </p>
        </div>

        <div className="contenido">
          <h2>Productos</h2>

          <div className="grid-tarjetas">
            {productos.length > 0 ? (
              productos.map((p) => (
                <div key={p.id} className="tarjeta">
                  {esNuevo(p.createdAt) && <span className="etiqueta-nuevo">NUEVO</span>}
                  <img src={p.imagen} alt={p.nombre} />
                  <h3>{p.nombre}</h3>
                  <p className="precio">
                    ${Number(p.precio).toLocaleString("es-CL")} CLP
                  </p>
                  <Link
                    to="/salaventa"
                    state={{ producto: p }}
                    className="tarjeta-link"
                  ></Link>
                </div>
              ))
            ) : (
              <p className="text-center text-light">No hay productos registrados.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
