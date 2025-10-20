import React from 'react';
import '../styles/blogSinMov.css';

export const BlogBirdsOfPrey = () => {
  return (
    <div className='blogUnico'>

      {/* Contenido del Blog */}
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <div className="card mb-4 mt-5 cardPersonalizada">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <img className="card-img" src="/Imagenes/Birds-of-Prey.jpg" alt="Imagen" />
                </div>
                <div className="col-md-6">
                  <div className="card-lobby d-flex flex-column justify-content-center p-4">
                    <h5 className="card-title fw-bold">Las superheroínas de DC prenden el vuelo como aves libres</h5>
                    <p class="card-text">Siempre que se intenta revitalizar uno de los equipos clásicos de la editorial se tira una moneda al aire, se queda en un clasicismo evocador de sentimiento hogareño o en un intento de aportar algo innovador para que no se sienta una iteración más. La moneda ha caído de canto con esta serie, pues Kelly Thompson ha sabido darnos una encarnación salvando la identidad y un planteamiento que podría haber salido de la época de Gail Simone, con elementos que incluso ya han ocurrido en encarnaciones anteriores, pero que se siente fresca al tener a muchos personajes nuevos con sus propias dinámicas.</p>
                    <p>Todo comienza con una declaración de intenciones de Kelly Thompson, recuperando al personaje de Sin. Durante los vaivenes editoriales, Sin, quien era la hija adoptiva de Canario Negro, era la futura líder de la Liga de los Asesinos, una historia parecida a la de Cassandra Cain, pero que al contrario que la pupila de Batman esta fue rescatada por Dinah cuando todavía era muy joven. Había sido escondida en un templo, pero de eso hace varios reinicios editoriales, pues no sabíamos nada de ella desde los Nuevos 52. Todo este ejercicio de rebuscar al fondo del armario, puede hacer parecer que Kelly viene a usar la continuidad editorial para satisfacer a los más fanáticos viejunos, pero no es así. No necesitas saber nada de lo que ocurrió con Gail Simone, Chuck Dixon o los Benson. Todo es nuevo, aunque tenga el corazón y veamos homenajes a lo clásico. </p>
                    <p>Volviendo a Sin, esta ha sido capturada por las amazonas y Canario Negro debo reunir un equipo para salvarla. Aunque, su primer pensamiento sea el de llamar a su mejor amiga Barbara, parece ser que, por algún motivo secreto, ella no puede participar en esta misión. Por ello su equipo está formado en gente en la que confía de alguna manera, supliendo el papel de la persona de confianza y amistad a Cassandra Cain, otra de las Batgirl. A estas se le suman Big Barda, quien ya estuvo en las Aves de Presa; Harley Quinn quien ya está ligada para siempre a esta cabecera de alguna manera a pesar de nunca haber estado realmente; Zealot, quien estuvo más o menos relacionada con Dinah mediante el Team 7; y una nueva y secreta integrante denominada Meridian que parece venir del futuro. </p>
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
