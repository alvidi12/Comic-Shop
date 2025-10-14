import React from "react";
import SalaVenta from "./SalaVenta";

export default function GreenArrow() {
  const producto = {
    titulo: "La saga de Green Arrow",
    nombre: "LA SAGA DE GREEN ARROW",
    clasificacion: "Average 4.7 / 5 out of 43",
    nombreAlternativo: "Green Arrow",
    autor: "Joshua Williamson",
    artista: "Sean Izaakse",
    genero: "DC Comics",
    tipo: "Cómic",
    estado: "OnGoing",
    descripcion:
      "Oliver Queen lleva perdido desde la Crisis Oscura en Tierras Infinitas, y su familia está decidida a encontrarlo, pero hay fuerzas peligrosas igual de decididas a mantenerlos separados a cualquier precio.",
    precio: 27500,
    imagen: "https://static.dc.com/2025-08/GA_Cv27_02711_DIGITAL.jpg?w=640",
  };

  return <SalaVenta producto={producto} />;
}