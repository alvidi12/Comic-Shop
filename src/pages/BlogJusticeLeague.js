import React from 'react';
import '../styles/blogSinMov.css';

export const BlogJusticeLeague = () => {
  return (
    <div className='blogUnico'>

      {/* Contenido del Blog */}
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <div className="card mb-4 mt-5 cardPersonalizada">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <img className="card-img" src="/Imagenes/justice-league-unlimited-1.jpg" alt="Imagen" />
                </div>
                <div className="col-md-6">
                  <div className="card-lobby d-flex flex-column justify-content-center p-4">
                    <h5 className="card-title fw-bold">¡LA ATALAYA SE ALZA!</h5>
                    <p class="card-text">La Liga de la Justicia ha vuelto y más grande que nunca. Tras Absolute Power y el especial DC All In, la muerte de Darkseid ha provocado un enorme vacío de poder en el DCU, y Superman, Batman y Wonder Woman deben unirse como nunca antes y ampliar la Liga de la Justicia para abarcar a todos los héroes que defienden las fuerzas del bien frente a un mal increíble. Mientras nuestros héroes trabajan para descubrir el misterio del sucesor del Señor Oscuro, el Proyecto Átomo de Ray Palmer desencadena una carrera entre héroes y villanos para controlar el destino de las habilidades metahumanas en el planeta Tierra, que amenaza con destruir todo lo que la Liga ha construido. Mundos vivirán, mundos morirán, y una sorpresa aguarda en la última página… No te pierdas el amanecer de la nueva era de la justicia: ¡todo empieza aquí!</p>
                    <p>El primer número de Justice League Unlimited presenta en apenas 22 páginas de historia la escala más grande que la vida que se espera de un comic de la Justice League, presentando a la organización Inferno que van a ser los villanos del arranque de esta nueva etapa. Pero la historia de Mark Waid hace muchas otras cosas bien, empezando por dejar margen para el lucimiento de un Dan Mora desatado que se encuentra en su salsa dibujando decenas de héroes miembros de la renovada Liga de la Justicia. Tener a Dan Mora dibujando y no sacarle el máximo partido sería un pecado que el veterano guionista desde luego no comete. Y el resultado es un comic que visualmente luce fantástico.</p>
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
