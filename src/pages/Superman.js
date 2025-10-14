import React from "react";
import SalaVenta from "./SalaVenta";

export default function Superman() {
  const producto = {
    titulo: "La saga de Superman",
    nombre: "LA SAGA DE SUPERMAN",
    clasificacion: "Average 4.8 / 5 out of 14",
    nombreAlternativo: "Superman",
    autor: "Brian Azzarello",
    artista: "Jim Lee",
    genero: "DC Comics",
    tipo: "Cómic",
    estado: "OnGoing",
    descripcion:
      "A medida que la gente desaparece por toda la Tierra, ¡una nueva amenaza pone a prueba a Superman como nunca antes! Además, conoce al Padre Leone, una figura que desempeñará un papel importante en la vida de El Hombre de Acero.",
    precio: 35500,
    imagen: "https://static.dc.com/2025-08/SM_Cv29_02911_DIGITAL.jpg?w=640",
  };

  return <SalaVenta producto={producto} />;
}