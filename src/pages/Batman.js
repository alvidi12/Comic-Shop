import React from "react";
import SalaVenta from "./SalaVenta";

export default function Batman() {
  const producto = {
    titulo: "Batman The Dark Knight",
    nombre: "BATMAN THE DARK KNIGHT",
    clasificacion: "Average 4.8 / 5 out of 368",
    nombreAlternativo: "Batman",
    autor: "Scott Snyder",
    artista: "Nick Dragotta",
    genero: "DC Comics",
    tipo: "Cómic",
    estado: "OnGoing",
    descripcion:
      "LA LEYENDA DE BATMAN SCOTT SNYDER Y EL ICÓNICO ARTISTA NICK DRAGOTTA TRANSFORMAN LA HISTORIA DEL CABALLERO OSCURO PARA LA ERA MODERNA! Sin la mansión… sin el dinero… sin el mayordomo… ¡lo que queda es el Caballero Oscuro!",
    precio: 35200,
    imagen: "https://i.ebayimg.com/images/g/pUYAAOSwxK5n0kwh/s-l1200.jpg",
  };

  return <SalaVenta producto={producto} />;
}
