import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Productos.css";

export default function Productos() {
  const isAdmin = window.location.pathname.startsWith("/admin-panel");

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function cargarProductos() {
      try {
        const respuesta = await fetch("https://comic-shop-backend.onrender.com/api/products");
        if (!respuesta.ok) throw new Error("Respuesta no válida del backend");

        const data = await respuesta.json();

        // Normalizamos al formato utilizado por la interfaz actual
        const normalizados = (Array.isArray(data) ? data : []).map((p) => ({
          ...p,

          // ID real desde MongoDB
          id: p.id || p._id || "",

          // La interfaz usa "nombre" en las tarjetas
          nombre: p.nombre || p.titulo || "Sin título",

          // Imagen final
          imagen:
            p.imagen ||
            p.imagenUrl ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/800px-No-Image-Placeholder.svg.png",

          // Precio convertido a número
          precio: Number(p.precio ?? 0),

          createdAt: p.createdAt || null,
        }));

        setProductos(normalizados);
        localStorage.setItem("productos", JSON.stringify(normalizados));
      } catch (error) {
        console.error("Error al cargar productos desde backend. Usando respaldo local:", error);

        const raw = localStorage.getItem("productos");
        if (raw) {
          try {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) setProductos(parsed);
          } catch {
            console.error("Error al leer productos desde localStorage");
          }
        }
      }
    }

    cargarProductos();
  }, []);

  // Determina si un producto es "nuevo"
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
            Explora nuestra colección exclusiva de cómics, seleccionados para los verdaderos fans
            del universo de DC Cómics.
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

                  {/* 
                    Se envía el producto completo a SalaVenta a través del state.
                    Compatible con su diseño y lógica actual.
                  */}
                  <Link
                    to={
                      isAdmin
                        ? `/admin-panel/productos-tienda/${p.id}`
                        : `/salaventa/${p.id}`
                    }
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
