import React, { useState } from "react";
import "../styles/Login.css";

export default function Login() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (correo && contrasena) {
      setMensaje("¡Inicio de sesión exitoso!");
    } else {
      setMensaje("Por favor completa todos los campos.");
    }
  };

  return (
    <div className="login">

    <main className="flex-grow-1">
      <div className="container">
        <div className="col-lg-4 mx-auto my-4">
          <div className="card mb-5 mt-5 inicio p-4">
            <h4 className="fw-bold text-center mb-4">Inicio de sesión</h4>

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="form-label">Correo Electrónico</label>
                <input
                  type="email"
                  className="form-control casillas"
                  placeholder="correo@dominio.cl"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control casillas"
                  placeholder="********"
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-warning w-100">
                Iniciar Sesión
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
