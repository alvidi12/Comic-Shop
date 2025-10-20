import { Link } from "react-router-dom";
import "../styles/Components.css"

export default function Navbar() {
  return (
    <div className="navbarComponent">
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand"><img className="Logo" src="/Imagenes/Logo.png" alt="Logo" width="110" /></Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="menu">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><Link className="nav-link active" to="/nosotros">Nosotros</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/productos">Productos</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/blog">Blogs</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/contacto">Contacto</Link></li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/login" className="nav-link">Inicio Sesión</Link></li>
            <li className="nav-item"><Link to="/register" className="nav-link">Registrate</Link></li>
            <li className="nav-item">
              <button className="nav-link active btn border-0 bg-transparent p-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#miniCarrito"
              aria-label="Abrir carrito">
                <i className="bi bi-cart-fill"></i>
                </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* Mini Carrito */}
          <div className="offcanvas offcanvas-end carrito" tabIndex="-1" id="miniCarrito">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Tu Carrito</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>
    
            <div className="offcanvas-body">
              <table className="table table-dark table-striped table-sm">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody id="carrito-body"></tbody>
              </table>
    
              <div className="d-grid">
                <button className="btn btn-carrito mt-3">Comprar</button>
              </div>
            </div>
          </div>
  </div>
  );
}
