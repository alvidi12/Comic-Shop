import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  // Detectamos si el usuario está dentro del panel admin
  const isAdmin = window.location.pathname.startsWith("/admin-panel");

  useEffect(() => {
    async function cargarBlogs() {
      try {
        const respuesta = await fetch("https://comic-shop-backend.onrender.com/api/blogs");
        if (!respuesta.ok) {
          throw new Error("Respuesta no válida del backend de blogs");
        }
        const data = await respuesta.json();

        const normalizados = (Array.isArray(data) ? data : []).map((blog) => ({
          ...blog,
          id: blog.id || blog._id || "",
          imagen: blog.imagen || blog.imagenUrl || "",
          resumen: blog.resumen || blog.descripcionCorta || "",
        }));

        setBlogs(normalizados);
        localStorage.setItem("blogs", JSON.stringify(normalizados));
      } catch (error) {
        console.error("Error cargando blogs desde backend, usando localStorage:", error);
        const raw = localStorage.getItem("blogs");
        if (raw) {
          try {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) setBlogs(parsed);
          } catch {
            console.error("Error leyendo blogs desde localStorage (vista pública)");
          }
        }
      }
    }

    cargarBlogs();
  }, []);

  const defaultImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Logo_DC_Comics.svg/320px-Logo_DC_Comics.svg.png";

  // ✔ COMPLETAMENTE CORREGIDO
  const handleIrDetalle = (id) => {
    if (!id) return;

    if (isAdmin) {
      navigate(`/admin-panel/blog-tienda/detalle/${id}`);
    } else {
      navigate(`/blog/detalle/${id}`);
    }
  };

  return (
    <div className="blog d-flex flex-column min-vh-100">
      <div className="container py-5">
        <h1 className="text-center mb-4 text">Blog DC Cómics</h1>
        <p className="text-center mb-5 text">
          Explora las últimas noticias, reseñas y artículos del universo de DC.
        </p>

        <div className="row">
          {blogs.length === 0 ? (
            <p className="text-center text-light">No hay entradas de blog aún.</p>
          ) : (
            blogs.map((blog) => (
              <div key={blog.id} className="col-md-6 mb-4">
                <div className="card mb-4 card-personalizada">
                  
                  {/* Imagen */}
                  <img
                    className="card-img-top"
                    src={blog.imagen || defaultImage}
                    alt={blog.titulo}
                  />

                  <div className="card-lobby">
                    <h5 className="titulo-blog-card">{blog.titulo}</h5>
                    <p className="resumen-blog-card">{blog.resumen || ""}</p>

                    <div className="d-flex justify-content-end">
                      <button
                        className="btn btn-warning btn-ver-mas"
                        onClick={() => handleIrDetalle(blog.id)}
                      >
                        Ver más
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default Blog;
