import React from "react";
import { useNavigate} from "react-router-dom";
import "../styles/AdminHome.css";

function AdminHome() {
  const navigate = useNavigate();

  return (
    <div className="home">
  
      {/*TARJETAS CENTRADAS */}
      <div className="cards-section mt-5">
        <div className="cards-container d-flex flex-wrap justify-content-center align-items-center gap-4">
          {/* TARJETA 1 */}
          <div className="card card11" onClick={() => navigate("/admin-panel/adminuser")} role="button" tabIndex={0}>
            <div className="card-content">
              <div className="card-title">Usuarios</div>
              <div className="card-description">Registra, modifica y elimina usuarios</div>
            </div>
          </div>

          {/* TARJETA 2 */}
          <div className="card card22" onClick={() => navigate("/admin-panel/adminproducts")} role="button" tabIndex={0}>
            <div className="card-content">
              <div className="card-title">Productos</div>
              <div className="card-description">Registra, modifica y elimina productos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Portada */}
      <section className="tarjeta-portada mt-5 text-center">
        <div className="portada-container">
          <div className="info-section">
            <h2>Se el Admin que todos quieren ser ✨❤️</h2>
          </div>
          <img src="/Imagenes/portada.png" alt="portada" />
        </div>
      </section>
    </div>
  );
}

export default AdminHome;
