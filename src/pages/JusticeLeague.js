import React from "react";
import SalaVenta from "./SalaVenta";

export default function JusticeLeague() {
  const producto = {
    id: 5,
    titulo: "¡Una saga de la Liga de la Justicia!",
    nombre: "¡UNA SAGA DE LA LIGA DE LA JUSTICIA!",
    clasificacion: "Average 4.8 / 5 out of 34",
    nombreAlternativo: "La Liga de la Justicia",
    autor: "Mark Waid",
    artista: "Dan Mora",
    genero: "DC Comics",
    tipo: "Cómic",
    estado: "OnGoing",
    descripcion:
      "Luego de los acontecimientos ocurridos en Absolute Power, los Superhéroes de la Tierra deciden reformar una nueva Liga, más conectada, más integrada, para ser más efectivos atendiendo las amenazas que un héroe en solitario no podría enfrentar. Y ante la expectativa tras la desaparición de Darkseid, el universo está en juego y alguien querrá llenar ese vacío de poder.",
    precio: 25400,
    imagen:
      "https://marmota.me/wp-content/uploads/2024/12/Justice-League-Unlimited-001digital-Marika-Empire-000-scaled.jpg",
  };

  return <SalaVenta producto={producto} />;
}