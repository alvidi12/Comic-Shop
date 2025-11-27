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
import Blog from "./pages/Blog";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Login from "./pages-user/Login";
import Register from "./pages-user/Register";
import Checkout from "./pages/Checkout";
// Páginas Admin
import AdminHome from "./AdminPages/AdminHome";
import AdminProducts from "./AdminPages/AdminProducts";
import AdminBlogs from "./AdminPages/AdminBlogs";
import { BlogDetalle } from "./pages/BlogDetalle";

// Layout para usuario
function PublicLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

// Layout para admin
function AdminLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarAdmin />
      <div className="flex-grow-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <CarritoProvider>
      <Router>
        <Routes>

          {/* Rutas Publicas */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/salaventa/:id" element={<SalaVenta />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/detalle/:id" element={<BlogDetalle />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>

          {/* Rutas Admin */}
          <Route path="/admin-panel" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="adminblogs" element={<AdminBlogs />} />
            <Route path="adminproducts" element={<AdminProducts />} />
            <Route path="productos-tienda" element={<Productos />} />
            <Route path="productos-tienda/:id" element={<SalaVenta />} />
            <Route path="blog-tienda" element={<Blog />} />
            <Route path="blog-tienda/detalle/:id" element={<BlogDetalle />} />
          </Route>

        </Routes>
      </Router>
    </CarritoProvider>
  );
}

export default App;
