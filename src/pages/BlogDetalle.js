import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Blog.css";

export const BlogDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  // Detectamos si estamos dentro de admin
  const isAdmin = window.location.pathname.startsWith("/admin-panel");

  useEffect(() => {
    async function cargarBlog() {
      try {
        const respuesta = await fetch(`https://comic-shop-backend.onrender.com/api/blogs/${id}`);
        if (!respuesta.ok) throw new Error("Error backend (detalle)");

        const data = await respuesta.json();

        const normalizado = {
          ...data,
          id: data.id || data._id,
          titulo: data.titulo || "Entrada sin título",
          imagen:
            data.imagen ||
            data.imagenUrl ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Logo_DC_Comics.svg/320px-Logo_DC_Comics.svg.png",
          resumen: data.resumen || "",
          contenido:
            data.contenido ||
            data.descripcion ||
            "Sin contenido disponible.",
        };

        setBlog(normalizado);
      } catch (error) {
        console.error("Error al cargar blog:", error);
      }
    }

    cargarBlog();
  }, [id]);

  if (!blog) {
    return (
      <div className="blogUnico">
        <div className="container my-5 text-center">
          <h2 className="text">Entrada de blog no encontrada</h2>
          <button
            className="btn-blog mt-3"
            onClick={() => navigate(isAdmin ? "/admin-panel/blog-tienda" : "/blog")}
          >
            Volver al Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="blogUnico d-flex flex-column min-vh-100">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            
            {/* USAMOS LA CLASE QUE EXISTE EN EL CSS */}
            <div className="cardPersonalizada">
              
              {/* Imagen principal */}
              <img
                src={blog.imagen}
                className="card-img-top"
                alt={blog.titulo}
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />

              <div className="card-lobby p-4">
                
                {/* Título amarillo */}
                <h1 className="text text-center mb-4">{blog.titulo}</h1>

                {/* Contenido */}
                <p className="text-content">{blog.contenido}</p>

                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-volver mt-3"
                    onClick={() => navigate(isAdmin ? "/admin-panel/blog-tienda" : "/blog")}
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
