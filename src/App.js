import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Productos from "./pages/Productos";
import SalaVenta from "./pages/SalaVenta";
import Batgirl from "./pages/Batgirl";
import Batman from "./pages/Batman";
import WonderWoman from "./pages/WonderWoman";
import Superman from "./pages/Superman";
import PoisonIvy from "./pages/PoisonIvy";
import BirdsOfPrey from "./pages/BirdsOfPrey";
import JusticeLeague from "./pages/JusticeLeague";
import GreenArrow from "./pages/GreenArrow";
import Blog from "./pages/Blog";
import { BlogAbsoluteWonderWoman } from "./pages/BlogAbsoluteWonderWoman";
import { BlogBatgirl } from "./pages/BlogBatgirl";
import { BlogDcComic } from "./pages/BlogDcComic";
import { BlogBirdsOfPrey } from "./pages/BlogBirdsOfPrey";
import { BlogJusticeLeague } from "./pages/BlogJusticeLeague";
import { BlogJoker } from "./pages/BlogJoker";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";

import Login from "./pages-user/Login";
import Register from "./pages-user/Register";
import AdminUser from "./pages-user/AdminUser";

function App() {
  return (
    <Router>
      {/* Estructura base: todo el sitio ocupa la altura completa */}
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        {/* Contenido dinámico (crece según la ruta) */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/salaventa" element={<SalaVenta />} />
            <Route path="/productos/batgirl" element={<Batgirl />} />
            <Route path="/productos/batman" element={<Batman />} />
            <Route path="/productos/wonder-woman" element={<WonderWoman />} />
            <Route path="/productos/superman" element={<Superman />} />
            <Route path="/productos/poison-ivy" element={<PoisonIvy />} />
            <Route path="/productos/birds-of-prey" element={<BirdsOfPrey />} />
            <Route path="/productos/justice-league" element={<JusticeLeague />} />
            <Route path="/productos/green-arrow" element={<GreenArrow />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/aww" element={<BlogAbsoluteWonderWoman />} />
            <Route path="/blog/batgirl" element={<BlogBatgirl />} />
            <Route path="/blog/dc-history" element={<BlogDcComic />} />
            <Route path="/blog/birds-of-prey" element={<BlogBirdsOfPrey />} />
            <Route path="/blog/liga-justicia" element={<BlogJusticeLeague />} />
            <Route path="/blog/joker" element={<BlogJoker />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminUser />} />
          </Routes>

        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
