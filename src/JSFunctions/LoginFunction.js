// LoginFunction.js
// Contiene TODA la lógica del login (validaciones, redirecciones)
// Este archivo maneja la lógica del login de forma desacoplada del componente visual.
// Usamos funciones compatibles con React y React Router v6.

export function loginHandler(correo, contrasena, navigate, setMensaje) {
  // Comentario original mantenido (no había en este archivo)

  // Validación de campos vacíos
  if (!correo || !contrasena) {
    setMensaje("Por favor completa todos los campos.");
    return;
  }

  // Credenciales del administrador (login especial)
  const adminCorreo = "admin1234@admin.cl";
  const adminContra = "admin1234";

  //  Dominios permitidos para usuarios normales
  const dominiosPermitidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];

  // Verificamos si es administrador
  if (correo === adminCorreo && contrasena === adminContra) {
    setMensaje("Inicio de sesión como Administrador exitoso. Redirigiendo...");
    setTimeout(() => {
      navigate("/admin"); // Esta ruta es un placeholder para la futura pantalla admin
    }, 1000);
    return;
  }

  // Validar si el dominio del correo pertenece a uno permitido
  const tieneDominioValido = dominiosPermitidos.some((dominio) =>
    correo.endsWith(dominio)
  );

  if (!tieneDominioValido) {
    setMensaje(
      "Correo no válido. Solo se aceptan dominios @duoc.cl, @profesor.duoc.cl o @gmail.com."
    );
    return;
  }

  // Si el usuario no es administrador pero el dominio es válido, redirigir a Home
  setMensaje("¡Inicio de sesión exitoso! Redirigiendo...");
  setTimeout(() => {
    navigate("/"); //Ruta funcional actual
  }, 1000);
}
