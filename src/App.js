// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

// Componentes compartidos (Usuario)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Componentes Admin
import NavbarAdmin from "./components/NavbarAdmin";

// Contexto del carrito
import { CarritoProvider } from "./context/CarritoContext";

// Páginas públicas
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
import Checkout from "./pages/Checkout";

// Páginas Admin
import AdminHome from "./AdminPages/AdminHome";
import AdminUser from "./AdminPages/AdminUser";
import AdminProducts from "./AdminPages/AdminProducts";

// Layout para usuario (Navbar y Footer normales)
function PublicLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar /> {/* Barra de navegación de usuario */}
      <div className="flex-grow-1">
        <Outlet /> {/* Aquí se renderizan las páginas */}
      </div>
      <Footer /> {/* Pie de página de usuario */}
    </div>
  );
}

// Layout para administrador (estructura diferente)
function AdminLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarAdmin /> {/* Barra de navegación de administrador */}
      <div className="flex-grow-1">
        <Outlet /> {/* Render de páginas admin */}
      </div>
      <Footer /> {/*Puede dejarse o eliminarse según su preferencia */}
    </div>
  );
}

function App() {
  return (
    <CarritoProvider>
      <Router>
        <Routes>
          {/* RUTAS DE USUARIO CON SU LAYOUT */}
          <Route element={<PublicLayout />}>
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
            <Route path="/checkout" element={<Checkout />} />
          </Route>

          {/*RUTAS ADMINISTRADOR CON SU LAYOUT */}
          <Route path="/admin-panel" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="adminuser" element={<AdminUser />} /> {/* Ruta /admin-panel/usuarios */}
            <Route path="adminproducts" element={<AdminProducts />} />
          </Route>
        </Routes>
      </Router>
    </CarritoProvider>
  );
}

export default App;
