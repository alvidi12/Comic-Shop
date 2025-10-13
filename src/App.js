import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Productos from './pages/Productos';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      {/* Agrega más rutas cuando necesites, ej: /nosotros, /contacto, /productos/:id */}
    </Routes>
  );
}

export default App;
