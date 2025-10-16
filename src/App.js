import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
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
import Blog from './pages/Blog';
import { BlogAbsoluteWonderWoman } from './pages/BlogAbsoluteWonderWoman';
import { BlogBatgirl } from "./pages/BlogBatgirl";
import { BlogDCComic } from "./pages/BlogDcComic";

function App() {
  return (
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
      <Route path="/blog/dccomic" element={<BlogDCComic />} />
    </Routes>
  );
}

export default App;