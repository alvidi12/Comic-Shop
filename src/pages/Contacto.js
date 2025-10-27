// Contacto.js

import "../styles/Contacto.css";
import useContactoLogic from "../JSFunctions/ContactoFunction";

export default function Contacto() {
  const { form, errores, handleChange, enviarFormulario } = useContactoLogic();

  return (
    <div className="contacto">
      <div className="main-content container mt-5">
        <div className="col-lg-6 mx-auto">
          <div className="card mb-3 card-personalizada p-4">
            <h4 className="fw-bold text-center titulo">Contáctanos</h4>

            <form onSubmit={enviarFormulario}>
              {/* Campo Nombres */}
              <div className="mb-3">
                <label className="form-label">Nombres</label>
                <input
                  type="text"
                  className="form-control casillas"
                  id="nombres"
                  placeholder="Ej: Nombres"
                  value={form.nombres}
                  onChange={handleChange}
                />
                {errores.nombres && <p className="text-danger">{errores.nombres}</p>}
              </div>

              {/* Campo Apellidos */}
              <div className="mb-3">
                <label className="form-label">Apellidos</label>
                <input
                  type="text"
                  className="form-control casillas"
                  id="apellidos"
                  placeholder="Ej: Apellidos"
                  value={form.apellidos}
                  onChange={handleChange}
                />
                {errores.apellidos && <p className="text-danger">{errores.apellidos}</p>}
              </div>

              {/* Campo Correo */}
              <div className="mb-3">
                <label className="form-label">Correo Electrónico</label>
                <input
                  type="email"
                  className="form-control casillas"
                  id="correo"
                  placeholder="correo@duoc.cl"
                  value={form.correo}
                  onChange={handleChange}
                />
                {errores.correo && <p className="text-danger">{errores.correo}</p>}
              </div>

              {/* Campo Mensaje */}
              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea
                  className="form-control casillas"
                  id="mensaje"
                  placeholder="Aquí su solicitud (máximo 500 caracteres)"
                  value={form.mensaje}
                  onChange={handleChange}
                  maxLength="500"
                ></textarea>
                {errores.mensaje && <p className="text-danger">{errores.mensaje}</p>}
                <p className="text-muted text-end">
                  {form.mensaje.length}/500 caracteres
                </p>
              </div>

              {/* Botón Enviar */}
              <button type="submit" className="btn btn-warning d-block mx-auto mt-4">
                <i className="bi bi-send-fill"></i> Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
