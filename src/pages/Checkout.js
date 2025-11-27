import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { jsPDF } from "jspdf";
import { useNavigate } from "react-router-dom"; // necesario para redirigir tras compra
import "../styles/Checkout.css";

export default function Checkout() {
  const { carrito, setCarrito, total, calcularTotal, vaciarCarrito } = useContext(CarritoContext);
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [metodo, setMetodo] = useState("Débito");

  const [tarjeta, setTarjeta] = useState("");
  const [cvv, setCvv] = useState("");
  const [vencimiento, setVencimiento] = useState("");

  const actualizarCantidad = (id, nuevaCantidad) => {
    const actualizado = carrito.map((item) =>
      item.id === id ? { ...item, cantidad: Number(nuevaCantidad) } : item
    );
    setCarrito(actualizado);
    calcularTotal(actualizado);
  };

  const eliminarProducto = (id) => {
    if (window.confirm("¿Eliminar este producto del carrito?")) {
      const actualizado = carrito.filter((item) => item.id !== id);
      setCarrito(actualizado);
      calcularTotal(actualizado);
    }
  };

  //Validación y formateo de tarjeta
  const formatearTarjeta = (valor) => {
    return valor
      .replace(/\D/g, "")            // solo números
      .replace(/(.{4})/g, "$1 ")     // cada 4 dígitos añade espacio
      .trim()
      .slice(0, 19);                 // máximo 16 dígitos + 3 espacios
  };

  const formatearVencimiento = (valor) => {
    return valor
      .replace(/\D/g, "") // solo números
      .replace(/(\d{2})(\d{0,2})/, "$1/$2")
      .slice(0, 5);
  };

  const formatearCVV = (valor) => {
    return valor.replace(/\D/g, "").slice(0, 4); // máximo 4 dígitos
  };

  // Generación de PDF
  const generarPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Comprobante de Compra", 20, 20);

    doc.setFontSize(12);
    doc.text(`Nombre: ${nombre}`, 20, 35);
    doc.text(`Email: ${email}`, 20, 49);
    doc.text(`Método de pago: ${metodo}`, 20, 56);

    let y = 70;
    doc.text("Productos:", 20, y);
    y += 10;

    carrito.forEach((item) => {
      // Título del producto
      doc.text(
        `${item.nombre} - Cant: ${item.cantidad} - $${(
          item.precio * item.cantidad
        ).toLocaleString()}`,
        20,
        y
      );
      y += 7;

      // 🔥 NUEVO: imprimir link del producto
      const linkTexto = item.link ? item.link : "Sin link disponible";
      doc.setFontSize(10);
      doc.text(`Link: ${linkTexto}`, 25, y);

      // Si deseas que el link sea clickeable en el PDF:
      if (item.link) {
        doc.link(25, y - 3, 180, 10, { url: item.link }); // NUEVO (opcional)
      }

      doc.setFontSize(12);
      y += 10;

      // Evitar que el contenido se salga de la página
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    });

    y += 10;
    doc.setFontSize(14);
    doc.text(`Total: $${total.toLocaleString()}`, 20, y);

    doc.save("comprobante_compra.pdf");

    // Vaciar carrito + redirigir al home
    vaciarCarrito();
    navigate("/");
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
          {/* --- Columna izquierda --- */}
          <div className="col-md-8">

            {/*MINIATURAS EN TABLA DE PRODUCTOS */}
            <table className="table table-dark table-striped align-middle">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Imagen</th>
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
                      <img
                        src={item.imagen}
                        alt={item.nombre}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          borderRadius: "4px",
                        }}
                      />
                    </td>

                    <td>
                      <input
                        type="number"
                        min="1"
                        value={item.cantidad}
                        onChange={(e) =>
                          actualizarCantidad(item.id, e.target.value)
                        }
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

            {/* Datos de tarjeta */}
            <div className="tarjeta-datos mt-4 p-3 border rounded">
              <h5 className="mb-3">Datos de Tarjeta</h5>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Número de tarjeta</label>
                  <input
                    type="text"
                    className="form-control"
                    value={tarjeta}
                    onChange={(e) => setTarjeta(formatearTarjeta(e.target.value))}
                    required
                  />
                </div>

                <div className="col-md-3 mb-3">
                  <label className="form-label">CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    value={cvv}
                    onChange={(e) => setCvv(formatearCVV(e.target.value))}
                    required
                  />
                </div>

                <div className="col-md-3 mb-3">
                  <label className="form-label">Vencimiento</label>
                  <input
                    type="text"
                    className="form-control"
                    value={vencimiento}
                    onChange={(e) => setVencimiento(formatearVencimiento(e.target.value))}
                    placeholder="MM/YY"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* --- Columna derecha --- */}
          <div className="col-md-4">
            <h4>Datos de compra</h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                generarPDF();
              }}
            >
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
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
                <label className="form-label">Método de pago</label>
                <select
                  className="form-select"
                  value={metodo}
                  onChange={(e) => setMetodo(e.target.value)}
                >
                  <option>Débito</option>
                  <option>Crédito</option>
                </select>
              </div>

              <div className="fw-bold mb-3">
                Total a pagar: ${total.toLocaleString()}
              </div>

              <button type="submit" className="btn btn-success w-100">
                Confirmar y descargar
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
