import React from "react";
import SalaVenta from "./SalaVenta";

export default function WonderWoman() {
  const producto = {
    id: 8,
    titulo: "Wonder Woman ¡Absoluta!",
    nombre: "WONDER WOMAN ¡ABSOLUTA!",
    clasificacion: "Average 4.8 / 5 out of 74",
    nombreAlternativo: "Wonder Woman",
    autor: "Kelly Thompson",
    artista: "Hayden Sherman",
    genero: "DC Comics",
    tipo: "Cómic",
    estado: "OnGoing",
    descripcion:
      "¡LA GANADORA DEL PREMIO EISNER KELLY THOMPSON Y EL ARTISTA REVELACIÓN HAYDEN SHERMAN REINVENTARON A WONDER WOMAN DESDE CERO! Sin la isla paradisíaca… sin la hermandad que la formó… sin una misión de paz… ¡lo que queda es Absolute Wonder Woman!",
    precio: 30100,
    imagen: "https://pbs.twimg.com/media/GZT3J8UWYAASuAX?format=jpg&name=4096x4096",
  };

  return <SalaVenta producto={producto} />;
}