import React, { useState, useContext } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// Importamos la lógica desde JSFunctions
import { loginHandler } from "../JSFunctions/loginHandler";

export default function Login() {
  // Comentarios originales mantenidos
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Hook de navegación de React Router v6
  const navigate = useNavigate();

  // OBTENER MÉTODO login() DEL AUTHCONTEXT
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    // Pasamos login() al loginHandler
    loginHandler(correo, contrasena, navigate, setMensaje, login);
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
                    id="correo"
                    className="form-control casillas"
                    placeholder="correo@dominio.cl"
                    value={correo}
                    onChange={(e) => {
                      setCorreo(e.target.value);
                      setMensaje("");
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Contraseña</label>
                  <input
                    type="password"
                    id="contrasena"
                    className="form-control casillas"
                    placeholder="********"
                    value={contrasena}
                    onChange={(e) => {
                      setContrasena(e.target.value);
                      setMensaje("");
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-warning w-100">
                  Iniciar Sesión
                </button>
              </form>

              {mensaje && (
                <div className="alert alert-info text-center mt-3">
                  {mensaje}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
