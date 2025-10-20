import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import "../styles/Contacto.css"

export default function Contacto() {
  const [form, setForm] = useState({ nombres: "", apellidos: "", correo: "", mensaje: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const enviarFormulario = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado por ${form.nombres} ${form.apellidos}`);
  };

  return (
    <div className="contacto">
      <Navbar />

      <div className="container mt-5">
        <div className="col-lg-6 mx-auto">
          <div className="card mb-3 contacto p-4">
            <h4 className="fw-bold text-center titulo">Contáctanos</h4>

            <form onSubmit={enviarFormulario}>
              <div className="mb-3">
                <label className="form-label">Nombres</label>
                <input type="text" className="form-control casillas" id="nombres" placeholder="Ej: Nombres" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Apellidos</label>
                <input type="text" className="form-control casillas" id="apellidos" placeholder="Ej: Apellidos" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control casillas" id="correo" placeholder="correo@duocuc.cl" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea className="form-control casillas" id="mensaje" placeholder="Aquí su solicitud" onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="btn btn-warning d-block mx-auto mt-4">
                <i className="bi bi-send-fill"></i> Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
