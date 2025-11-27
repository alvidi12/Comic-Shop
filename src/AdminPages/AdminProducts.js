import React, { useEffect, useMemo, useState } from "react";
import "../styles/AdminUser.css";

export default function AdminProducts() {
  const [activeTab, setActiveTab] = useState("registro");

  // Producto vacío: se mantiene estructura original
  const emptyProducto = useMemo(
    () => ({
      id: "",
      titulo: "",
      nombre: "",
      clasificacion: "",
      nombreAlternativo: "",
      autor: "",
      artista: "",
      genero: "",
      tipo: "Cómic",
      estado: "OnGoing",
      descripcion: "",
      precio: "",
      imagen: "",
    }),
    []
  );

  const [form, setForm] = useState(emptyProducto);
  const [productos, setProductos] = useState([]);
  const [editId, setEditId] = useState(null);

  //CARGAR PRODUCTOS DESDE EL BACKEND
  useEffect(() => {
    async function cargarProductos() {
      try {
        const resp = await fetch("https://comic-shop-backend.onrender.com/api/products");

        if (!resp.ok) throw new Error("Error al cargar productos");
        const data = await resp.json();

        // Normalizamos para mantener compatibilidad con el Frontend
        const normalizados = data.map((p) => ({
          ...p,
          id: p.id || p._id, // Se usa el virtual id o _id
          imagen: p.imagen || "",
          precio: Number(p.precio ?? 0),
        }));

        setProductos(normalizados);

        // También se guarda en localStorage como respaldo
        localStorage.setItem("productos", JSON.stringify(normalizados));
      } catch (error) {
        console.error("Error cargando productos desde backend:", error);
        const raw = localStorage.getItem("productos");
        if (raw) {
          try {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) setProductos(parsed);
          } catch {}
        }
      }
    }

    cargarProductos();
  }, []);

  // Mantener compatibilidad con estado previo
  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }, [productos]);

  // Manejo de formularios
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm(emptyProducto);
    setEditId(null);
  };

  //  CREAR o EDITAR producto
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.titulo || !form.nombre || !form.precio) {
      alert("Título, Nombre y Precio son obligatorios.");
      return;
    }

    const precioNum = Number(form.precio);
    const body = {
      ...form,
      precio: Number.isNaN(precioNum) ? 0 : precioNum,
      imagen:
        form.imagen?.trim() ||
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/800px-No-Image-Placeholder.svg.png",
    };

    // TOKEN obligatorio
    const token = localStorage.getItem("token");

    try {
      let resp;

      if (editId != null) {

        //   EDITAR (PUT)
        resp = await fetch(`https://comic-shop-backend.onrender.com/api/products/${editId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        });

        if (!resp.ok) {
          alert("Error al actualizar el producto.");
          return;
        }

        const actualizado = await resp.json();

        // Actualizamos en memoria
        const listaActualizada = productos.map((p) =>
          p.id === editId ? actualizado : p
        );
        setProductos(listaActualizada);

      } else {

        //   CREAR (POST)
        resp = await fetch("https://comic-shop-backend.onrender.com/api/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        });

        if (!resp.ok) {
          alert("Error al crear el producto.");
          return;
        }

        const nuevo = await resp.json();

        // Agregar nuevo a lista
        setProductos((prev) => [...prev, nuevo]);
      }

      resetForm();
      setActiveTab("listado");
    } catch (error) {
      console.error("Error enviando producto al backend:", error);
      alert("Error de conexión con el servidor.");
    }
  };

  //   ELIMINAR Producto
  const onDelete = async (id) => {
    if (!window.confirm("¿Eliminar este producto?")) return;

    const token = localStorage.getItem("token");

    try {
      const resp = await fetch(`https://comic-shop-backend.onrender.com/api/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!resp.ok) {
        alert("Error al eliminar el producto.");
        return;
      }

      // Eliminar de la lista actual
      setProductos((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error eliminando producto:", error);
      alert("Error de conexión con el servidor.");
    }
  };

  //  Editar desde tabla
  const onEdit = (prod) => {
    setEditId(prod.id);
    setForm({ ...prod, precio: String(prod.precio ?? "") });
    setActiveTab("registro");
  };

  return (
    <div className="admin">
      <main className="flex-grow-1">
        <div className="container text-center my-5">
          <h1 className="titulo fw-bold mb-4">Administración de Productos</h1>

          {/* Pestañas */}
          <ul className="nav nav-tabs justify-content-center mb-4">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "registro" ? "active" : ""}`}
                onClick={() => setActiveTab("registro")}
              >
                Registro / Edición
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "listado" ? "active" : ""}`}
                onClick={() => setActiveTab("listado")}
              >
                Listado
              </button>
            </li>
          </ul>

          {/* === Registro / Edición === */}
          {activeTab === "registro" && (
            <div className="card p-4 mx-auto col-lg-8">
              <h3 className="mb-3">
                {editId != null ? `Editar producto #${editId}` : "Nuevo producto"}
              </h3>

              <form onSubmit={onSubmit}>
                <div className="row g-3">

                  {/*formulario */}
                  <div className="col-md-4">
                    <label className="form-label">Título</label>
                    <input name="titulo" value={form.titulo} onChange={onChange} className="form-control" />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Nombre</label>
                    <input name="nombre" value={form.nombre} onChange={onChange} className="form-control" />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Clasificación</label>
                    <input name="clasificacion" value={form.clasificacion} onChange={onChange} className="form-control" />
                  </div>

                  {/*Campos */}
                  <div className="col-md-4">
                    <label className="form-label">Nombre alternativo</label>
                    <input name="nombreAlternativo" value={form.nombreAlternativo} onChange={onChange} className="form-control" />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Género</label>
                    <input name="genero" value={form.genero} onChange={onChange} className="form-control" />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Estado</label>
                    <input name="estado" value={form.estado} onChange={onChange} className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Autor</label>
                    <input name="autor" value={form.autor} onChange={onChange} className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Artista</label>
                    <input name="artista" value={form.artista} onChange={onChange} className="form-control" />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Descripción</label>
                    <textarea name="descripcion" value={form.descripcion} onChange={onChange} className="form-control" rows={3} />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Precio (CLP)</label>
                    <input name="precio" value={form.precio} onChange={onChange} type="number" className="form-control" />
                  </div>

                  <div className="col-md-8">
                    <label className="form-label">URL Imagen</label>
                    <input name="imagen" value={form.imagen} onChange={onChange} className="form-control" />
                  </div>
                </div>

                <div className="mt-3 d-flex gap-2">
                  <button type="submit" className="btn btn-primary">
                    {editId != null ? "Guardar cambios" : "Crear producto"}
                  </button>

                  <button type="button" onClick={resetForm} className="btn btn-secondary">
                    Limpiar
                  </button>
                </div>
              </form>
            </div>
          )}

          {/*Listado */}
          {activeTab === "listado" && (
            <div className="table-responsive">
              {productos.length === 0 ? (
                <p className="text-warning">No hay productos registrados aún.</p>
              ) : (
                <table className="table table-dark table-striped align-middle">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Imagen</th>
                      <th>Título</th>
                      <th>Nombre</th>
                      <th>Nombre alternativo</th>
                      <th>Género</th>
                      <th>Estado</th>
                      <th>Precio</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>

                  <tbody>
                    {productos.map((p) => (
                      <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>
                          <img
                            src={p.imagen}
                            alt={p.nombre}
                            style={{ width: 60, height: 60, objectFit: "contain" }}
                          />
                        </td>
                        <td>{p.titulo}</td>
                        <td>{p.nombre}</td>
                        <td>{p.nombreAlternativo}</td>
                        <td>{p.genero}</td>
                        <td>{p.estado}</td>
                        <td>${Number(p.precio).toLocaleString("es-CL")}</td>

                        <td>
                          <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(p)}>
                            Editar
                          </button>

                          <button className="btn btn-sm btn-danger" onClick={() => onDelete(p.id)}>
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
