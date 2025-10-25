// LoginFunction.js
// Contiene TODA la lógica del login (validaciones, redirecciones)
// Este archivo maneja la lógica del login de forma desacoplada del componente visual.
// Usamos funciones compatibles con React y React Router v6.

export function loginHandler(correo, contrasena, navigate, setMensaje) {
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

  // 🔐 Verificamos si es administrador
  if (correo === adminCorreo && contrasena === adminContra) {
    setMensaje("Inicio de sesión como Administrador exitoso. Redirigiendo...");

    // ✅ Guardamos en localStorage el rol
    localStorage.setItem("usuarioRol", "admin");

    // ✅ Redirigimos al panel exclusivo del administrador
    setTimeout(() => {
      navigate("/admin-panel"); // 🔥 Nueva ruta para AppAdmin
    }, 1000);

    return;
  }

  // ✅ Validar si el dominio del correo pertenece a uno permitido (usuario normal)
  const tieneDominioValido = dominiosPermitidos.some((dominio) =>
    correo.endsWith(dominio)
  );

  if (!tieneDominioValido) {
    setMensaje(
      "Correo no válido. Solo se aceptan dominios @duoc.cl, @profesor.duoc.cl o @gmail.com."
    );
    return;
  }

  // ✅ Usuario normal
  setMensaje("¡Inicio de sesión exitoso! Redirigiendo...");
  localStorage.setItem("usuarioRol", "user"); // Guardamos rol de usuario normal
  setTimeout(() => {
    navigate("/"); // Ruta actual del usuario normal
  }, 1000);
}
