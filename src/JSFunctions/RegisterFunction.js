// RegisterFunction.js
// Contiene toda la lógica del proceso de registro
// esta función se encarga de validar los datos del formulario, incluida confirmación de contraseña, y redirigir si el registro es exitoso.

export function registerHandler(form, navigate, setMensaje) {
  const { nombre, apellidos, correo, contrasena, confirmarContrasena } = form;

  //  Validar campos vacíos
  if (!nombre || !apellidos || !correo || !contrasena || !confirmarContrasena) {
    setMensaje("Por favor completa todos los campos.");
    return;
  }

  //  Validar que las contraseñas coincidan
  if (contrasena !== confirmarContrasena) {
    setMensaje("Las contraseñas no coinciden. Por favor verifica.");
    return;
  }

  //  Validar dominios permitidos
  const dominiosPermitidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];
  const dominioValido = dominiosPermitidos.some((dominio) =>
    correo.endsWith(dominio)
  );

  if (!dominioValido) {
    setMensaje(
      "Correo no válido. Solo se aceptan dominios @duoc.cl, @profesor.duoc.cl o @gmail.com."
    );
    return;
  }

  //  Simular registro exitoso
  setMensaje("¡Registro exitoso! Redirigiendo...");

  //  Redirigir con retardo para mostrar el mensaje
  setTimeout(() => {
    navigate("/"); // Redirige a la pantalla principal
  }, 1000);
}
