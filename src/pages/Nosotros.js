import "../styles/Nosotros.css"

export default function Nosotros() {
  return (
    <div className="nosotros">

      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <div className="card mb-4 card-personalizada">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <img className="card-img" src="/Imagenes/comicss.jpg" alt="Imagen" />
                </div>
                <div className="col-md-6">
                  <div className="card-lobby d-flex flex-column justify-content-center p-4">
                    <h5 className="card-title fw-bold">Nosotros</h5>
                    <p className="card-text parrafo">
                      En nuestra tienda creemos que cada página de cómic es una puerta hacia la grandeza... Nacimos del amor por las historias que inspiran valentía, justicia y esperanza... Porque en esta tienda no solo vendemos cómics... compartimos historias que nos hacen creer que cualquiera puede ser un héroe.
                    </p>
                    <p className="parrafo">
                      Entendemos que el mundo avanza rápido, como un velocista escarlata. Por eso, hemos llevado la magia de las viñetas al entorno virtual. Nuestra misión es derribar las barreras físicas para que puedas acceder a universos infinitos desde cualquier lugar. Tu dispositivo es ahora la llave a miles de mundos.
                    </p>
                    <p className="fw-bold parrafo">
                      No nos conformamos con entregarte el cómic... queremos vivirlo contigo. A través de nuestro Blog, exploramos los matices de cada saga, recomendamos joyas ocultas y mantenemos viva la llama del debate. Aquí no eres solo un cliente, eres parte de nuestra alianza.
                    </p>
                    <a href="/" className="btn mt-auto">Volver</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
