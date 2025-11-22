import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Blog.css";

export const BlogDetalle = () => {
  const { id } = useParams(); // id desde la URL
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function cargarBlog() {
      try {
        const respuesta = await fetch(`https://comic-shop-backend.onrender.com/api/blogs/${id}`);
        if (!respuesta.ok) {
          throw new Error("Respuesta no válida del backend de detalle de blog");
        }

        const data = await respuesta.json();

        const normalizado = {
          ...data,
          id: data.id || data._id || "",
          titulo: data.titulo || "Entrada sin título",
          imagen:
            data.imagen ||
            data.imagenUrl ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Logo_DC_Comics.svg/320px-Logo_DC_Comics.svg.png",
          resumen: data.resumen || data.descripcionCorta || "",
          contenido:
            data.contenido ||
            data.descripcionLarga ||
            data.descripcion ||
            "Sin contenido disponible.",
        };

        setBlog(normalizado);
      } catch (error) {
        console.error(
          "Error al cargar blog desde backend, se usa localStorage (detalle):",
          error
        );

        const raw = localStorage.getItem("blogs");
        if (raw) {
          try {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) {
              const encontrado = parsed.find(
                (b) => String(b.id) === String(id)
              );

              if (encontrado) {
                // Normalización para localStorage
                setBlog({
                  ...encontrado,
                  contenido:
                    encontrado.contenido ||
                    encontrado.descripcion ||
                    "Sin contenido disponible.",
                });
              } else {
                setBlog(null);
              }
            }
          } catch {
            console.error("Error al leer blogs desde localStorage (detalle)");
          }
        }
      }
    }

    if (id) cargarBlog();
  }, [id]);

  const defaultImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Logo_DC_Comics.svg/320px-Logo_DC_Comics.svg.png";

  if (!blog) {
    return (
      <div className="blog">
        <div className="container my-5 text-center">
          <h2 className="text">Entrada de blog no encontrada</h2>
          <button className="btn mt-3" onClick={() => navigate("/blog")}>
            Volver al Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="blog d-flex flex-column min-vh-100">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card card-personalizada-detalle">
              {/* Imagen principal */}
              <img
                src={blog.imagen || defaultImage}
                className="card-img-top img-detalle"
                alt={blog.titulo}
              />

              <div className="card-body">
                {/* Título */}
                <h1 className="card-title titulo-detalle text-center mb-4">
                  {blog.titulo}
                </h1>

                {/* Contenido principal */}
                <p className="card-text contenido-detalle">{blog.contenido}</p>

                {/* Botón Volver al Blog */}
                <div className="d-flex justify-content-end">
                  <button
                    className="btn-volver-blog mt-3" // Comentario original mantenido
                    onClick={() => navigate("/blog")}
                  >
                    Volver al Blog
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
