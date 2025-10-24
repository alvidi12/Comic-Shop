import React, { useState } from "react";
import "../styles/Register.css";

export default function Register() {
  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    contrasena: "",
  });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (Object.values(form).every((val) => val.trim() !== "")) {
      setMensaje("¡Registro exitoso!");
    } else {
      setMensaje("Por favor completa todos los campos.");
    }
  };

  return (
    <div className="register">

    <main className="flex-grow-1">
      <div className="container">
        <div className="col-lg-4 mx-auto my-4">
          <div className="card mb-5 mt-5 registro p-4">
            <h4 className="fw-bold text-center mb-4">Crear cuenta</h4>

            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  className="form-control casillas"
                  placeholder="Ej: Nombre"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Apellidos</label>
                <input
                  type="text"
                  id="apellidos"
                  className="form-control casillas"
                  placeholder="Ej: Apellidos"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Correo Electrónico</label>
                <input
                  type="email"
                  id="correo"
                  className="form-control casillas"
                  placeholder="correo@dominio.cl"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  id="contrasena"
                  className="form-control casillas"
                  placeholder="********"
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-warning w-100">
                Registrarse
              </button>
            </form>

            {mensaje && (
              <div className="alert alert-info text-center mt-3">{mensaje}</div>
            )}
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}
