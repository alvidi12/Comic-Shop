// ContactoFunction.js
// NUEVO: Lógica en formato React Hook para usar en Contacto.js correctamente

import { useState } from "react";
import jsPDF from "jspdf";

export default function useContactoLogic() {
  // Estados del formulario
  const [form, setForm] = useState({ nombres: "", apellidos: "", correo: "", mensaje: "" });
  const [errores, setErrores] = useState({});

  // Manejar cambios en inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  // Validaciones
  const validarFormulario = () => {
    let nuevosErrores = {};
    const dominiosPermitidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];
    const telefonoRegex = /^\+569\d{8}$/; // Solo si agregas campo teléfono después

    if (!form.nombres.trim()) nuevosErrores.nombres = "El nombre es obligatorio";
    if (!form.apellidos.trim()) nuevosErrores.apellidos = "El apellido es obligatorio";

    if (!form.correo.trim()) {
      nuevosErrores.correo = "El correo es obligatorio";
    } else if (!dominiosPermitidos.some((dominio) => form.correo.endsWith(dominio))) {
      nuevosErrores.correo = "El correo debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com";
    }

    if (!form.mensaje.trim()) {
      nuevosErrores.mensaje = "El mensaje es obligatorio";
    } else if (form.mensaje.length > 500) {
      nuevosErrores.mensaje = "El mensaje no puede superar los 500 caracteres";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  // Generar PDF
  const generarPDF = () => {
    const doc = new jsPDF();
    const fecha = new Date().toLocaleString();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("SOLICITUD DE CONTACTO", 105, 20, { align: "center" });

    doc.setFontSize(12);
    doc.text(`Fecha: ${fecha}`, 200, 30, { align: "right" });

    doc.setFont("helvetica", "normal");
    doc.text(`Nombre: ${form.nombres} ${form.apellidos}`, 20, 50);
    doc.text(`Correo: ${form.correo}`, 20, 60);

    doc.text("Mensaje:", 20, 80);
    doc.text(doc.splitTextToSize(form.mensaje, 170), 20, 90);

    doc.save(`Solicitud_${form.nombres}.pdf`);
  };

  // Enviar formulario
  const enviarFormulario = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      alert("✅ Envío exitoso. Se generará el PDF.");
      generarPDF();
      setForm({ nombres: "", apellidos: "", correo: "", mensaje: "" }); // limpiar
      setErrores({});
    }
  };

  return {
    form,
    errores,
    handleChange,
    enviarFormulario,
  };
}
