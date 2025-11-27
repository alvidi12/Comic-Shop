import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {

  const { usuarioCorreo } = useContext(AuthContext);

  // Key única del usuario actual
  const storageKey = usuarioCorreo ? `carrito_${usuarioCorreo}` : null;

  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  // Cargar carrito cuando CAMBIA el usuario
  useEffect(() => {
    if (storageKey) {
      const guardado = localStorage.getItem(storageKey);
      setCarrito(guardado ? JSON.parse(guardado) : []);
    } else {
      setCarrito([]); // sesión cerrada
    }
  }, [storageKey]);

  // Guardar carrito por usuario
  useEffect(() => {
    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(carrito));
    }
  }, [carrito, storageKey]);

  // Calcular total
  useEffect(() => {
    const nuevoTotal = carrito.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    );
    setTotal(nuevoTotal);
  }, [carrito]);

  //  FUNCIONES 
  const agregarAlCarrito = (producto) => {
    const existente = carrito.find((item) => item.id === producto.id);

    let nuevoCarrito;
    if (existente) {
      nuevoCarrito = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
    } else {
      nuevoCarrito = [...carrito, { ...producto, cantidad: 1 }];
    }

    setCarrito(nuevoCarrito);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    if (storageKey) localStorage.removeItem(storageKey);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        total,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
        setCarrito,
        setTotal,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
