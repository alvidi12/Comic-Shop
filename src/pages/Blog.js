import React from 'react';
import '../styles/Blog.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Componente para la página principal del Blog
const Blog = () => {
  return (
    <div className="blog">
      <Navbar />

      {/* Contenido principal */}
      <div className="container my-5">
        {/* Cabecera */}
        <div className="text-center mb-5">
          <h1 className="text">Bienvenido a nuestro BLOG!</h1>
          <p className="text lead fw-bold">Aquí podrás encontrar las últimas noticias y curiosidades de tus comics y personajes favoritos</p>
        </div>

        {/* Grid de blogs */}
        <div className="row d-flex">
          {/* Card 1 - Absolute Wonder Woman */}
          <div className="col-md-4 p-3" onClick={() => window.location.href='/blog/aww'}>
            <div className="card mb-4 card-personalizada">
              <img className="card-img-top" src="/Imagenes/Wonder Woman.jpg" alt="WonderWoman" />
              <div className="card-lobby">
                <h5 className="card-title fw-bold">Conoces a ABSOLUTE WONDER WOMAN?!</h5>
                <p className="card-text">¡LA GANADORA DEL PREMIO EISNER KELLY THOMPSON Y EL ARTISTA REVELACIÓN HAYDEN SHERMAN REINVENTARON A WONDER WOMAN DESDE CERO! Sin la isla paradisíaca… sin la hermandad que la formó… sin una misión de paz… ¡lo que queda es Absolute Wonder Woman!</p>
                <a href="/blog/aww" className="btn">Ver más</a>
              </div>
            </div>
          </div>

          {/* Card 2 - Joker */}
          <div className="col-md-4 p-3" onClick={() => window.location.href='/blog/joker'}>
            <div className="card mb-4 card-personalizada">
              <img className="card-img-top" src="/Imagenes/Joker.jpg" alt="Imagen" />
              <div className="card-lobby">
                <h5 className="card-title fw-bold">El regreso del JOKER! Los New 52!</h5>
                <p className="card-text">Este mes de octubre, uno de los villanos más notorios de la historia del cómic está haciendo su regreso a DC COMICS-THE NEW 52. En la nueva historia, la Muerte de la Familia, el Guasón saldrá de la oscuridad de una manera horrorosa, desconcertante y enorme.</p>
                <a href="/blog/joker" className="btn">Ver más</a>
              </div>
            </div>
          </div>

          {/* Card 3 - Batgirl */}
          <div className="col-md-4 p-3" onClick={() => window.location.href='/blog/batgirl'}>
            <div className="card mb-4 card-personalizada">
              <img className="card-img-top" src="/Imagenes/Cassandra Cain Icon (DC Comics).jpg" alt="Imagen" />
              <div className="card-lobby">
                <h5 className="card-title fw-bold">Después de 2 décadas Cassandra Cain vuelve como BATGIRL!</h5>
                <p className="card-text">¡Agarren sus asientos, rásguense las vestiduras, y regocijense en celebración porque Cassandra Cain tomará el centro del escenario con su primera serie en solitario de Batgirl, después de dos décadas!</p>
                <a href="/blog/batgirl" className="btn">Ver más</a>
              </div>
            </div>
          </div>

          {/* Card 4 - Justice League */}
          <div className="col-md-4 p-3" onClick={() => window.location.href='/blog/liga-justicia'}>
            <div className="card mb-4 card-personalizada">
              <img className="card-img-top" src="/Imagenes/Justice League Unlimited by Dan Mora.jpg" alt="Imagen" />
              <div className="card-lobby">
                <h5 className="card-title fw-bold">Conoce a la Nueva Justice League!</h5>
                <p className="card-text">Luego de los acontecimientos ocurridos en Absolute Power, los Superhéroes de la Tierra deciden reformar una nueva Liga, más conectada, más integrada, para ser más efectivos atendiendo las amenazas.</p>
                <a href="/blog/liga-justicia" className="btn">Ver más</a>
              </div>
            </div>
          </div>

          {/* Card 5 - DC Comics History */}
          <div className="col-md-4 p-3" onClick={() => window.location.href='/blog/dc-history'}>
            <div className="card mb-4 card-personalizada">
              <img className="card-img-top" src="/Imagenes/New-History-of-the-DC-Universe-001-2025-0001.jpg" alt="Imagen" />
              <div className="card-lobby">
                <h5 className="card-title fw-bold">La nueva historia del UNIVERSO DC!</h5>
                <p className="card-text">¡DESCUBRE LA HISTORIA DEFINITIVA DEL UNIVERSO DC! Para celebrar los 90 años de DC, el gran fan y escritor Mark Waid retrocede en el tiempo hasta los inicios del Universo DC.</p>
                <a href="/blog/dc-history" className="btn">Ver más</a>
              </div>
            </div>
          </div>

          {/* Card 6 - Birds of Prey */}
          <div className="col-md-4 p-3" onClick={() => window.location.href='/blog/birds-of-prey'}>
            <div className="card mb-4 card-personalizada">
              <img className="card-img-top" src="/Imagenes/Birds-of-Prey-001_000.jpg" alt="Imagen" />
              <div className="card-lobby">
                <h5 className="card-title fw-bold">Nueva adaptación de BIRDS OF PREY!</h5>
                <p className="card-text">ROMPIENDO CORAZONES Y ROSTROS: ¡LAS AVES DE PRESA HAN VUELTO! Cada misión es importante. Cada vida salvada es un milagro. Pero esta vez, es personal.</p>
                <a href="/blog/birds-of-prey" className="btn">Ver más</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;