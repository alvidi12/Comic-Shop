import React, { useState } from "react";
import "../styles/AdminUser.css";

export default function AdminUsers() {
  const [activeTab, setActiveTab] = useState("registro");

  return (
    <div className="admin">

    <main className="flex-grow-1">
      <div className="container text-center my-5">
        <h1 className="titulo fw-bold mb-4">Administración de Usuarios</h1>

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
        <div className="card p-4 mx-auto col-lg-6">
          {activeTab === "registro" && (
            <>
              <h3 className="mb-3">Registro de Usuario</h3>
              <form>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="RUN (12.345.678-9)"
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Nombre"
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Apellidos"
                />
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="usuario@personal.cl"
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Dirección"
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Región"
                />
                <button className="btn btn-primary w-100">Guardar</button>
              </form>
            </>
          )}

          {activeTab === "modificar" && (
            <>
              <h3 className="mb-3">Modificación de usuarios</h3>
              <table className="table table-dark table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Juan Pérez</td>
                    <td><button className="btn btn-warning">Editar</button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Andy Villarroel</td>
                    <td><button className="btn btn-warning">Editar</button></td>
                  </tr>
                </tbody>
              </table>
            </>
          )}

          {activeTab === "eliminar" && (
            <>
              <h3 className="mb-3">Eliminar usuarios</h3>
              <table className="table table-dark table-bordered">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Juan Pérez</td>
                    <td>Vendedor</td>
                    <td><button className="btn btn-danger">Eliminar</button></td>
                  </tr>
                  <tr>
                    <td>Claudia Carinao</td>
                    <td>Administrativo</td>
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
