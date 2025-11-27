import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {

  // Usuario REACTIVO (viene del AuthContext)
  const { usuarioCorreo } = useContext(AuthContext);

  // Clave única del carrito
  const storageKey = usuarioCorreo ? `carrito_${usuarioCorreo}` : null;

  // Carrito en memoria
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  // Cargar carrito cuando cambia el usuario
  useEffect(() => {
    if (storageKey) {
      const guardado = localStorage.getItem(storageKey);
      setCarrito(guardado ? JSON.parse(guardado) : []);
    } else {
      setCarrito([]); // cerrar sesion con carrito vacío
    }
  }, [storageKey]);

  // Guardar carrito en storage del usuario actual
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

  // FUNCIONES DEL CARRITO
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
    const nuevoCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(nuevoCarrito);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    if (storageKey) localStorage.removeItem(storageKey);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        setCarrito,
        total,
        setTotal,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
