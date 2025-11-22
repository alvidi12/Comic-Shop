//AdminBlogs
import React, { useEffect, useMemo, useState } from "react";
import "../styles/AdminUser.css";

export default function AdminBlogs() {
  const [activeTab, setActiveTab] = useState("registro");

  // Estructura base de un blog (formato original mantenido)
  const emptyBlog = useMemo(
    () => ({
      id: "",
      titulo: "",
      resumen: "",       
      descripcion: "",   
      imagen: "",        
    }),
    []
  );

  const [form, setForm] = useState(emptyBlog);
  const [blogs, setBlogs] = useState([]);
  const [editId, setEditId] = useState(null);

  // ============================================================
  //   🟦 CARGAR BLOGS DESDE BACKEND (MongoDB)
  // ============================================================
  useEffect(() => {
    async function cargarBlogs() {
      try {
        const resp = await fetch(
          "https://comic-shop-backend.onrender.com/api/blogs"
        );

        if (!resp.ok) throw new Error("Error al cargar blogs");
        const data = await resp.json();

        // Normalizar estructura para el frontend
        const normalizados = data.map((b) => ({
          ...b,
          id: b.id || b._id,
          resumen: b.resumen || b.descripcionCorta || "",
          imagen: b.imagenUrl || b.imagen || "",
          descripcion: b.contenido || b.descripcion || "",
        }));

        setBlogs(normalizados);
        localStorage.setItem("blogs", JSON.stringify(normalizados));
      } catch (error) {
        console.error("Error desde backend. Usando localStorage:", error);

        const raw = localStorage.getItem("blogs");
        if (raw) {
          try {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) setBlogs(parsed);
          } catch {}
        }
      }
    }

    cargarBlogs();
  }, []);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  // ============================================================
  //   FORMULARIO
  // ============================================================
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm(emptyBlog);
    setEditId(null);
  };

  // ============================================================
  //   🟩 CREAR / EDITAR BLOG — BACKEND REAL
  // ============================================================
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.titulo || !form.descripcion) {
      alert("El Título y la Descripción completa son obligatorios.");
      return;
    }

    const defaultImage =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Logo_DC_Comics.svg/320px-Logo_DC_Comics.svg.png";

    const body = {
      titulo: form.titulo,
      contenido: form.descripcion,
      imagenUrl: form.imagen || defaultImage,
      resumen: form.resumen || "",
      autor: localStorage.getItem("usuarioNombre") || "Administrador",
    };

    const token = localStorage.getItem("token");

    try {
      let resp;

      if (editId != null) {
        // =======================
        //     EDITAR (PUT)
        // =======================
        resp = await fetch(
          `https://comic-shop-backend.onrender.com/api/blogs/${editId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body),
          }
        );

        if (!resp.ok) {
          alert("Error al actualizar el blog.");
          return;
        }

        const actualizado = await resp.json();

        setBlogs((prev) =>
          prev.map((b) => (b.id === editId ? actualizado : b))
        );
      } else {
        // =======================
        //     CREAR (POST)
        // =======================
        resp = await fetch(
          `https://comic-shop-backend.onrender.com/api/blogs`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body),
          }
        );

        if (!resp.ok) {
          alert("Error al crear el blog.");
          return;
        }

        const nuevo = await resp.json();
        setBlogs((prev) => [...prev, nuevo]);
      }

      resetForm();
      setActiveTab("listado");
    } catch (error) {
      console.error("Error conectando con backend:", error);
      alert("Error al conectar con el servidor.");
    }
  };

  // ============================================================
  //   🟥 ELIMINAR BLOG
  // ============================================================
  const onDelete = async (id) => {
    if (!window.confirm("¿Desea eliminar este blog?")) return;

    const token = localStorage.getItem("token");

    try {
      const resp = await fetch(
        `https://comic-shop-backend.onrender.com/api/blogs/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!resp.ok) {
        alert("Error al eliminar blog.");
        return;
      }

      setBlogs((prev) => prev.filter((b) => b.id !== id));
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("Error al conectar con el servidor.");
    }
  };

  // ============================================================
  //   CARGAR EN FORMULARIO
  // ============================================================
  const onEdit = (blog) => {
    setForm({
      id: blog.id,
      titulo: blog.titulo || "",
      resumen: blog.resumen || "",
      descripcion: blog.descripcion || blog.contenido || "",
      imagen: blog.imagen || blog.imagenUrl || "",
    });
    setEditId(blog.id);
    setActiveTab("registro");
  };

  // ============================================================
  //   RENDER ORIGINAL
  // ============================================================
  return (
    <div className="admin">
      <main className="flex-grow-1">
        <div className="container text-center my-5">
          <h1 className="titulo fw-bold mb-4">Administración de Blogs</h1>

          <ul className="nav nav-tabs justify-content-center mb-4">
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "registro" ? "active" : ""
                }`}
                onClick={() => setActiveTab("registro")}
              >
                Registro
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "listado" ? "active" : ""
                }`}
                onClick={() => setActiveTab("listado")}
              >
                Listado
              </button>
            </li>
          </ul>

          {/* FORM */}
          {activeTab === "registro" && (
            <div className="card p-4 mx-auto col-lg-8">
              <h3 className="mb-3">
                {editId != null ? `Editar blog #${editId}` : "Nuevo blog"}
              </h3>

              <form onSubmit={onSubmit}>
                <div className="row g-3">
                  <div className="col-md-12">
                    <label className="form-label">Título</label>
                    <input
                      name="titulo"
                      value={form.titulo}
                      onChange={onChange}
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="form-label">Descripción corta</label>
                    <input
                      name="resumen"
                      value={form.resumen}
                      onChange={onChange}
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="form-label">Descripción completa</label>
                    <textarea
                      name="descripcion"
                      value={form.descripcion}
                      onChange={onChange}
                      className="form-control"
                      rows={6}
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="form-label">URL Imagen</label>
                    <input
                      name="imagen"
                      value={form.imagen}
                      onChange={onChange}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-end gap-2 mt-4">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={resetForm}
                  >
                    Limpiar
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {editId != null ? "Actualizar" : "Guardar"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* LISTA */}
          {activeTab === "listado" && (
            <div className="table-responsive">
              {blogs.length === 0 ? (
                <p className="text-warning">No hay blogs registrados aún.</p>
              ) : (
                <table className="table table-dark table-striped align-middle">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Portada</th>
                      <th>Título</th>
                      <th>Descripción corta</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.map((b) => (
                      <tr key={b.id}>
                        <td>{b.id}</td>
                        <td>
                          <img
                            src={b.imagen}
                            alt={b.titulo}
                            style={{
                              width: 60,
                              height: 60,
                              objectFit: "contain",
                            }}
                          />
                        </td>
                        <td>{b.titulo}</td>
                        <td>{b.resumen || ""}</td>

                        <td>
                          <button
                            type="button"
                            className="btn btn-sm btn-warning me-2"
                            onClick={() => onEdit(b)}
                          >
                            Editar
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-danger"
                            onClick={() => onDelete(b.id)}
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
