import { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

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
    calcularTotal(nuevoCarrito);
  };

  const eliminarDelCarrito = (id) => {
    if (window.confirm("¿Eliminar todos los productos de este tipo?")) {
      const nuevoCarrito = carrito.filter((item) => item.id !== id);
      setCarrito(nuevoCarrito);
      calcularTotal(nuevoCarrito);
    }
  };

  const calcularTotal = (carritoActualizado) => {
    const nuevoTotal = carritoActualizado.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    );
    setTotal(nuevoTotal);
  };

  const vaciarCarrito = () => {
    if (window.confirm("¿Finalizar compra?")) {
      setCarrito([]);
      setTotal(0);
    }
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        setCarrito,   // se exporta para que Checkout pueda actualizar cantidades
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
