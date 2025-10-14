import React from "react";
import SalaVenta from "./SalaVenta";

export default function BirdsOfPrey() {
  const producto = {
    titulo: "Birds of Prey ¡Han vuelto!",
    nombre: "BIRDS OF PREY ¡HAN VUELTO!",
    clasificacion: "Average 4.9 / 5 out of 110",
    nombreAlternativo: "Aves de presa",
    autor: "Kelly Thompson",
    artista: "Leonardo Romero",
    genero: "DC Comics",
    tipo: "Cómic",
    estado: "OnGoing",
    descripcion:
      "Cada misión es importante. Cada vida salvada es un milagro. Pero esta vez, es personal. Enfrentada a una misión personal encomendada por un nuevo y misterioso aliado, y con unas probabilidades casi imposibles, vuelve a formar las Aves de Presa con un grupo incomparable de mujeres duras y un único objetivo: la extracción sin derramamiento de sangre. ¿Qué podría salir mal?",
    precio: 32000,
    imagen: "https://marmota.me/wp-content/uploads/2023/09/Birds-of-Prey-001_000.jpg",
  };

  return <SalaVenta producto={producto} />;
}