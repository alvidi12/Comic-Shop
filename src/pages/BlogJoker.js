import React from 'react';
import '../styles/blogSinMov.css';

export const BlogJoker = () => {
  return (
    <div className='blogUnico'>

      {/* Contenido del Blog */}
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <div className="card mb-4 mt-5 cardPersonalizada">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <img className="card-img" src="/Imagenes/JokerBlog.jpg" alt="Imagen" />
                </div>
                <div className="col-md-6">
                  <div className="card-lobby d-flex flex-column justify-content-center p-4">
                    <h5 className="card-title fw-bold">El regreso del JOKER! Los New 52!</h5>
                    <p class="card-text">Tras unos meses en los que la maquinaria comercial de DC Comics ha estado calentando motores para El Regreso del Joker, y después del pequeño lío que se montó con la aparición del nuevo rostro del villano antes de lo que los promotores de la historia hubieran deseado, hoy por fin sale a la venta Batman #13, que da pistoletazo a una nueva saga y un nuevo crossover. La idea inicial es la de utilizar el mismo formato de La noche de los búhos, es decir, la historia principal se desarrollará en la serie de Batman y no será necesaria la lectura de ninguna de las otras series para seguir el hilo.</p>
                    <p>Pero hay dos factores muy importantes que diferencian una saga de otra y que pueden llevar a pensar que los lectores nos perderemos bastantes detalles si sólo leemos la serie de Scott Snyder y Greg Capullo. El primero de de ellos es el villano; mientras que en la anterior saga cada uno de los héroes de Gotham debía detener los planes de una de las Garras del Tribunal de los Búhos y la historia podía quedar muy contenida, aquí tenemos al mismo villano en todas y cada una de las series. Si el plan maestro del Joker pasa por hacer daño a todos y cada uno de los miembros de la bat-familia, eso quiere decir que muchas de las partes de ese plan se verán en otras series.</p>
                    <a href="/blog" className="btn btn-blog mt-auto">Volver</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
