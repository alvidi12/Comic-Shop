import React from 'react';
import '../styles/blogSinMov.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const BlogBatgirl = () => {
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
                  <img className="card-img" src="/Imagenes/Cassandra Cain Icon (DC Comics).jpg" alt="Imagen" />
                </div>
                <div className="col-md-6">
                  <div className="card-lobby d-flex flex-column justify-content-center p-4">
                    <h5 className="card-title fw-bold">Después de 2 décadas Cassandra Cain vuelve como BATGIRL!</h5>
                    <p className="card-text">«Because I'm Batgirl. And no one, not even my mother, will ever take this from me»</p>
                    <p>Una nueva cabecera de Batgirl es una buena noticia, pues no teníamos ninguna desde la pasada Batgirls. En los últimos años hemos visto como el manto se ha repartido entre Barbara Gordon, Stephanie Brown y Cassandra Cain. Barbara fue la batgirl original y la que estuvo dos décadas como la única.</p>
                    <p>En todo ese tiempo no tuvo una serie principal con su nombre, siendo relegada a tener secciones o apariciones regulares en series como Detective Comics o Batman Family. La primera serie regular de Batgirl fue con Cassandra Cain, donde comenzó guionizándola Kelley Puckett y que acabó con Chuck Dixon. Una serie juvenil que marcó un antes y un después.</p>
                    <p>Si queréis leer este nuevo número uno, es importante que comprendáis la importancia de las historias contenidas en este primer volumen. La acción y la narrativa parten de que conoces al personaje de Cassandra Cain y la mitología alrededor suyo. Tate Brombal quiere continuar aportado a la historia del personaje y no tiene miedo de utilizar, desde la primera página, a Lady Shiva.</p>
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
