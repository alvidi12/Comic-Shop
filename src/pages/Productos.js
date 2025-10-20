import React from "react";
import { Link } from "react-router-dom";
import "../styles/Productos.css";

export default function Productos() {
  return (
    <div className="pagina-productos d-flex flex-column min-vh-100">

      {/* Portada */}
      <div className="container my-5">
        <div className="text-center mb-5">
          <h1 className="titulo">¡ Hecha un vistazo a nuestras ediciones limitadas !</h1>
          <p className="subtitulo">
            Nada más confortable que saber los orígenes y sucesos de tus personajes favoritos
            al alcance de tus manos ¡QUE ESPERAS!
          </p>
        </div>

        {/* Contenido */}
        <div className="contenido">
          <h2>Productos</h2>

          <div className="grid-tarjetas">
            {/* Tarjetas adaptadas */}
            <div className="tarjeta">
              <img
                src="https://static.dc.com/2025-08/SM_Cv29_02911_DIGITAL.jpg?w=640"
                alt="portada de superman"
              />
              <h3>LA SAGA DE SUPERMAN</h3>
              <Link to="/productos/superman" className="tarjeta-link"></Link>
            </div>

            <div className="tarjeta">
              <span className="etiqueta-descuento">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/024/801/302/non_2x/red-sales-badge-discount-sticker-illustration-super-offer-a-fifty-percent-discount-tag-with-red-color-super-sale-discount-coupon-free-png.png"
                  alt="descuento 10%"
                />
              </span>
              <img
                src="https://static.dc.com/2025-09/T2353600115001.jpg?w=640"
                alt="portada de batgirl"
              />
              <h3>CRÓNICAS DE BATGIRL</h3>
              <Link to="/productos/batgirl" className="tarjeta-link"></Link>
            </div>

            <div className="tarjeta">
              <img
                src="https://i.ebayimg.com/images/g/pUYAAOSwxK5n0kwh/s-l1200.jpg"
                alt="portada de batman"
              />
              <h3>BATMAN THE DARK KNIGHT</h3>
              <Link to="/productos/batman" className="tarjeta-link"></Link>
            </div>

            <div className="tarjeta">
              <img
                src="https://static.dc.com/2025-08/GA_Cv27_02711_DIGITAL.jpg?w=640"
                alt="portada de flecha verde"
              />
              <h3>LA SAGA DE GREEN ARROW</h3>
              <Link to="/productos/green-arrow" className="tarjeta-link"></Link>
            </div>

            <div className="tarjeta">
              <img
                src="https://pbs.twimg.com/media/GZT3J8UWYAASuAX?format=jpg&name=4096x4096"
                alt="portada Wonder Woman"
              />
              <h3>WONDER WOMAN ¡ABSOLUTA!</h3>
              <Link to="/productos/wonder-woman" className="tarjeta-link"></Link>
            </div>

            <div className="tarjeta">
              <img
                src="https://marmota.me/wp-content/uploads/2023/03/Poison-Ivy-2022-001-000_at.jpg"
                alt="portada poison ivy"
              />
              <h3>LA SAGA DE POISON IVY</h3>
              <Link to="/productos/poison-ivy" className="tarjeta-link"></Link>
            </div>

            <div className="tarjeta">
              <img
                src="https://marmota.me/wp-content/uploads/2023/09/Birds-of-Prey-001_000.jpg"
                alt="portada de birds of prey"
              />
              <h3>BIRDS OF PREY ¡HAN VUELTO!</h3>
              <Link to="/productos/birds-of-prey" className="tarjeta-link"></Link>
            </div>

            <div className="tarjeta">
              <img
                src="https://marmota.me/wp-content/uploads/2024/12/Justice-League-Unlimited-001digital-Marika-Empire-000-scaled.jpg"
                alt="portada justice league"
              />
              <h3>¡UNA SAGA DE LA LIGA DE LA JUSTICIA!</h3>
              <Link to="/productos/justice-league" className="tarjeta-link"></Link>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
