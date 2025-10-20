import React from 'react';
import '../styles/blogSinMov.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const BlogDcComic = () => {
  return (
    <div className="blogUnico">
      <Navbar />

      {/* Contenido del Blog */}
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <div className="card mb-4 mt-5 card-personalizada">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <img className="card-img" src="/Imagenes/new-history-of-dc-universe-1_portada-simple.jpg" alt="Imagen" />
                </div>
                <div className="col-md-6">
                  <div className="card-lobby d-flex flex-column justify-content-center p-4">
                    <h5 className="card-title fw-bold">¡CONOCE LA HISTORIA DEFINITIVA DEL UNIVERSO DC!</h5>
                    <p className="card-text">Para celebrar los 90 años de DC, el superfan y escritor Mark Waid retrocede en el tiempo hasta los inicios del Universo DC en una miniserie de cuatro números dibujada por algunos de los mejores artistas de DC y narrada por Barry Allen, el Relámpago.</p>
                    <p>Una de las mejores cosas que tienen los universos superheroicos es la idea de historia compartida con una cronología lineal que afecta a todos los héroes de ese mundo. En el caso de DC Comics esta cronología puede ser un poco complicada, dados los diferentes reinicios que ha tenido su continuidad desde 1986.</p>
                    <p>Waid es el artífice de mi retorno a DC Comics. Gracias a su buen hacer junto a artistas como Dan Mora ha ido creando historias que recordaron lo que molan los personajes de DC cuando se usan bien. El conocimiento enciclopédico de Waid y su gusto por la historia y la continuidad le convierten en el hombre adecuado para este trabajo.</p>
                    <a href="/blog" className="btn btn-blog mt-auto">Volver</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};