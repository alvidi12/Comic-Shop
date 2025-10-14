import React from "react";
import SalaVenta from "./SalaVenta";

export default function Batgirl() {
  const producto = {
    titulo: "Batgirl",
    nombre: "CRÓNICAS DE BATGIRL",
    clasificacion: " Average 4.9 / 5 out of 102",
    nombreAlternativo: "Batgirl",
    autor: "Tate Brombal",
    artista: "Takeshi Miyazawa",
    genero: "DC Comics",
    tipo: "Cómic",
    estado: "OnGoing",
    descripcion:
      "Cassandra Cain tomará el centro del escenario con su primera serie en solitario de Batgirl, después de dos décadas! Cuando un grupo letal de asesinos aparece para asesinar a Cassandra, Lady Shiva llega al rescate, las dos deberán dejar a un lado su complicado pasado para trabajar como madre e hija, y asegurarse de salir con vida…",
    precio: 29900,
    imagen: "https://static.dc.com/2025-09/T2353600115001.jpg?w=640",
  };

  return <SalaVenta producto={producto} />;
}
