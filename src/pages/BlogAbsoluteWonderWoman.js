import React from 'react';
import styles from '../styles/blogSinMov.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const BlogAbsoluteWonderWoman = () => {
  return (
    <div className='blogUnico'>
      <Navbar />

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
                    <a href="/blog" className="btn btn-blog mt-auto">
                      Volver
                    </a>
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
