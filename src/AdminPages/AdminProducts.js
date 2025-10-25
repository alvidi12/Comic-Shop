import React, { useState } from "react";
import "../styles/AdminUser.css"; // Puedes cambiar el nombre cuando tengas AdminProducts.css

export default function AdminProducts() {
  const [activeTab, setActiveTab] = useState("registro");

  return (
    <div className="admin">
      <main className="flex-grow-1">
        <div className="container text-center my-5">
          <h1 className="titulo fw-bold mb-4">Administración de Productos</h1>

          {/* Tabs */}
          <ul className="nav nav-tabs justify-content-center mb-4">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "registro" ? "active" : ""}`}
                onClick={() => setActiveTab("registro")}
              >
                Registrar
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "modificar" ? "active" : ""}`}
                onClick={() => setActiveTab("modificar")}
              >
                Modificar
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "eliminar" ? "active" : ""}`}
                onClick={() => setActiveTab("eliminar")}
              >
                Eliminar
              </button>
            </li>
          </ul>

          {/* Contenido de tabs */}
          <div className="card registro p-4 mx-auto col-lg-6">
            {activeTab === "registro" && (
              <>
                <h3 className="mb-3">Registro de Productos</h3>
                <form>
                  <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="#1234"
                    id="codigo"
                  />
                  <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="Batman #1"
                    id="nombre"
                  />
                  <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="Resumen Producto"
                    id="descripcion"
                  />
                  <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="$12.000"
                    id="precio"
                  />
                  <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="12"
                    id="stock"
                  />
                  <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="Adolescentes +16"
                    id="categoria"
                  />
                  <input
                    type="file"
                    className="form-control mb-4    "
                    id="imagen"
                    name="imagen"
                    accept="image/*"
                  />
                  <button type="submit" className="btn btn-primary w-100">
                    Guardar
                  </button>
                </form>
              </>
            )}

            {activeTab === "modificar" && (
              <>
                <h3 className="mb-4">Modificación de productos</h3>
                <table className="table table-bordered table-dark mt-4 mb-3">
                  <thead>
                    <tr>
                      <th>Código</th> {/* ✅ corregido */}
                      <th>Nombre</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#1234</td>
                      <td>Batgirl Vol. 1 (2024)</td>
                      <td><button className="btn btn-warning">Editar</button></td>
                    </tr>
                    <tr>
                      <td>#1593</td>
                      <td>Superman #35 (2017)</td>
                      <td><button className="btn btn-warning">Editar</button></td>
                    </tr>
                    <tr>
                      <td>#0563</td>
                      <td>Batman "La muerte en la familia" New 52 2017</td>
                      <td><button className="btn btn-warning">Editar</button></td>
                    </tr>
                    <tr>
                      <td>#2345</td>
                      <td>Batman: The Killing Joke (2008)</td>
                      <td><button className="btn btn-warning">Editar</button></td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}

            {activeTab === "eliminar" && (
              <>
                <h3 className="mb-4">Eliminar productos</h3>
                <table className="table table-bordered table-dark mt-4 mb-3">
                  <thead>
                    <tr>
                      <th>Código</th>
                      <th>Nombre</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#1234</td>
                      <td>Batgirl Vol. 1 (2024)</td>
                      <td><button className="btn btn-danger">Eliminar</button></td>
                    </tr>
                    <tr>
                      <td>#1593</td>
                      <td>Superman #35 (2017)</td>
                      <td><button className="btn btn-danger">Eliminar</button></td>
                    </tr>
                    <tr>
                      <td>#0563</td>
                      <td>Batman "La muerte en la familia" New 52 2017</td>
                      <td><button className="btn btn-danger">Eliminar</button></td>
                    </tr>
                    <tr>
                      <td>#2345</td>
                      <td>Batman: The Killing Joke (2008)</td>
                      <td><button className="btn btn-danger">Eliminar</button></td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
