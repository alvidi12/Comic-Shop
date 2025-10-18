import React from 'react';
import styles from '../styles/blogSinMov.css';

export const BlogAbsoluteWonderWoman = () => {
  return (
    <div className='blogUnico'>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img
              className="Logo"
              src="/Imagenes/Logo.png"
              alt="Logo"
              width="110"
              height="auto"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="menu"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/nosotros">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/productos">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/blog">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/contacto">
                  Contacto
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/login">
                  Inicio Sesión
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/registro">
                  Regístrate
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#miniCarrito"
                >
                  <i className="bi bi-cart-fill"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mini Carrito */}
      <div
        className={`offcanvas offcanvas-end ${styles.offcanvasCarrito}`}
        tabIndex="-1"
        id="miniCarrito"
      >
        <div
          className={`offcanvas-header ${styles.offcanvasCarritoHeader}`}
        >
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
            <tbody id="carritoBody"></tbody>
          </table>
          <div className="d-grid">
            <button className="btn btn-carrito mt-3">Comprar</button>
          </div>
        </div>
      </div>

      {/* Contenido del Blog */}
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <div
              className={`card mb-4 mt-5 ${styles.cardPersonalizada}`}
            >
              <div className="row no-gutters">
                <div className="col-md-6">
                  <img
                    className="card-img"
                    src="/Imagenes/AbsoluteWonderWoman1.jpg"
                    alt="Imagen"
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-lobby d-flex flex-column justify-content-center p-4">
                    <h5 className="card-title fw-bold">
                      ¿Conoces a ABSOLUTE WONDER WOMAN?!
                    </h5>
                    <p className="card-text">
                      ¡LA GANADORA DEL PREMIO EISNER KELLY THOMPSON Y EL
                      ARTISTA REVELACIÓN HAYDEN SHERMAN REINVENTARON A WONDER
                      WOMAN DESDE CERO! Sin la isla paradisíaca… sin la
                      hermandad que la formó… sin una misión de paz… ¡lo que
                      queda es Absolute Wonder Woman!
                    </p>
                    <p>
                      Sólo hay dos títulos en DC Comics nuevo Universo
                      Absoluto, pero esto ya se está perfilando para ser un
                      debut de todos los tiempos. El Batman absoluto estaba
                      muy por encima de las expectativas. Y una vez más,
                      Absolute Wonder Woman lo saca completamente del parque,
                      gracias a la gran acción, que se esperaba y una gran
                      emoción que no era. Además, el artista Hayden Sherman
                      está haciendo el trabajo de su carrera aquí, haciendo de
                      este un primer número.
                    </p>
                    <p>
                      En el primer número, descubrimos que la Diana Absoluta
                      también está metida en cosas que son grandes; aunque en
                      su caso es una enorme espada al estilo anime que lleva
                      para luchar contra demonios atacando a transeúntes
                      desprevenidos. Por qué Diana está ahí, lo que son los
                      demonios, lo que quieren... desconocido. Pero está claro
                      desde el principio que esto no es una Diana oscura y
                      arenosa... Esta es la fuerte protectora que conocemos del
                      universo principal, impulsada y alimentada por su
                      corazón, que fue criada en circunstancias muy diferentes.
                    </p>
                    <p>
                      Específicamente, fue dejada como bebé por Apolo, en el
                      infierno, y criada por Circe... uno de los peores enemigos
                      de la Mujer Maravilla en el universo principal. Thompson
                      monta expertamente múltiples misterios aquí. ¿Qué pasó
                      con las Amazonas? ¿Por qué se salvó Diana? ¿Cómo llegó
                      del Infierno, a donde la encontramos en el presente?
                    </p>
                    <a href="/blog" className="btn mt-auto">
                      Volver
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className={`text-white text-center py-4 mt-5 ${styles.footer}`}
      >
        <button
          className={`btn ${styles.btn1}`}
          onClick={() => (window.location.href = '/contacto')}
        >
          Contáctanos
        </button>
        <p>&copy; Todos los derechos reservados 😸</p>
      </footer>
    </div>
  );
};
