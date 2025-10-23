import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { jsPDF } from "jspdf";
import "../styles/Checkout.css";

export default function Checkout() {
  const { carrito, setCarrito, total, setTotal } = useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
  const [metodo, setMetodo] = useState("Envío estándar");

  const actualizarCantidad = (id, nuevaCantidad) => {
    const actualizado = carrito.map((item) =>
      item.id === id ? { ...item, cantidad: Number(nuevaCantidad) } : item
    );
    setCarrito(actualizado);

    const nuevoTotal = actualizado.reduce(
      (acc, i) => acc + i.precio * i.cantidad,
      0
    );
    setTotal(nuevoTotal);
  };

  const eliminarProducto = (id) => {
    if (window.confirm("¿Eliminar este producto del carrito?")) {
      const actualizado = carrito.filter((item) => item.id !== id);
      setCarrito(actualizado);
      const nuevoTotal = actualizado.reduce(
        (acc, i) => acc + i.precio * i.cantidad,
        0
      );
      setTotal(nuevoTotal);
    }
  };

  const generarPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Comprobante de Compra", 20, 20);

    doc.setFontSize(12);
    doc.text(`Nombre: ${nombre}`, 20, 35);
    doc.text(`Dirección: ${direccion}`, 20, 42);
    doc.text(`Email: ${email}`, 20, 49);
    doc.text(`Método de envío: ${metodo}`, 20, 56);

    let y = 70;
    doc.text("Productos:", 20, y);
    y += 10;

    carrito.forEach((item) => {
      doc.text(
        `${item.nombre} - Cant: ${item.cantidad} - $${(
          item.precio * item.cantidad
        ).toLocaleString()}`,
        20,
        y
      );
      y += 8;
    });

    y += 10;
    doc.setFontSize(14);
    doc.text(`Total: $${total.toLocaleString()}`, 20, y);

    doc.save("comprobante_compra.pdf");
  };

  if (carrito.length === 0) {
    return (
      <div className="text-vacio py-5 text-center">
        <h3>Tu carrito está vacío</h3>
      </div>
    );
  }

  return (
    <div className="checkout">
    <div className="container py-5">
      <h2 className="mb-4">Finalizar Compra</h2>

      <div className="row">
        {/* Lista de productos */}
        <div className="col-md-8">
          <table className="table table-dark table-striped align-middle">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item) => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.cantidad}
                      onChange={(e) => actualizarCantidad(item.id, e.target.value)}
                      className="form-control form-control-sm"
                      style={{ width: "80px" }}
                    />
                  </td>
                  <td>${(item.precio * item.cantidad).toLocaleString()}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => eliminarProducto(item.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Formulario */}
        <div className="col-md-4">
          <h4>Datos de envío</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              generarPDF();
            }}
          >
            <div className="mb-3">
              <label className="form-label">Nombre completo</label>
              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Dirección</label>
              <input
                type="text"
                className="form-control"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Método de envío</label>
              <select
                className="form-select"
                value={metodo}
                onChange={(e) => setMetodo(e.target.value)}
              >
                <option>Envío estándar</option>
                <option>Envío express</option>
              </select>
            </div>

            <div className="fw-bold mb-3">Total a pagar: ${total.toLocaleString()}</div>

            <button type="submit" className="btn btn-success w-100">
              Confirmar y descargar PDF
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
