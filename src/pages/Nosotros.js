import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Nosotros.css"

export default function Nosotros() {
  return (
    <div className="nosotros">
      <Navbar />
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
                      En nuestra tienda creemos que cada página de cómic es una puerta hacia la grandeza...
                    </p>
                    <p className="parrafo">
                      Nacimos del amor por las historias que inspiran valentía, justicia y esperanza...
                    </p>
                    <p className="fw-bold parrafo">
                      Porque en esta tienda no solo vendemos cómics... compartimos historias que nos hacen creer que cualquiera puede ser un héroe.
                    </p>
                    <a href="/" className="btn mt-auto">Volver</a>
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
}
