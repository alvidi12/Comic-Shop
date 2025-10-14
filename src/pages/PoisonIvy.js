import React from "react";
import SalaVenta from "./SalaVenta";

export default function PoisonIvy() {
  const producto = {
    titulo: "La saga de Poison Ivy",
    nombre: "LA SAGA DE POISON IVY",
    clasificacion: "Average 4.5 / 5 out of 45",
    nombreAlternativo: "Poison Ivy",
    autor: "G. Willow Wilson",
    artista: "Marcio Takara",
    genero: "DC Comics",
    tipo: "Cómic",
    estado: "OnGoing",
    descripcion:
      "Pamela Isley ha sido muchas cosas en su vida. Dios viviente, supervillana, activista, científica y muerta. En un nuevo cuerpo que no pidió y con un renovado sentido de propósito, Hiedra abandona Gotham y se dispone a completar su mayor obra: un regalo al mundo que curará el daño que se le ha infligido… acabando con la humanidad.",
    precio: 25100,
    imagen: "https://marmota.me/wp-content/uploads/2023/03/Poison-Ivy-2022-001-000_at.jpg",
  };

  return <SalaVenta producto={producto} />;
}