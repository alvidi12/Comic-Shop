export async function registerHandler(form, navigate, setMensaje) {
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
  const dominioValido = dominiosPermitidos.some((dom) =>
    correo.endsWith(dom)
  );

  if (!dominioValido) {
    setMensaje(
      "Correo no válido. Solo se aceptan dominios @duoc.cl, @profesor.duoc.cl o @gmail.com."
    );
    return;
  }


  //REGISTRO (MongoDB)
  try {
    const respuesta = await fetch("https://comic-shop-backend.onrender.com/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: `${nombre} ${apellidos}`,
        email: correo,
        password: contrasena,
      }),
    });

    if (!respuesta.ok) {
      let errorMsg = "No se pudo completar el registro.";
      try {
        const dataError = await respuesta.json();
        if (dataError.message) errorMsg = dataError.message;
      } catch {}

      setMensaje(errorMsg);
      return;
    }

    // Registro exitoso
    setMensaje("¡Registro exitoso! Redirigiendo...");

    setTimeout(() => {
      navigate("/login"); // Ruta correcta: inicia sesión después de registrarse
    }, 900);
  } catch (error) {
    console.error("Error al registrar en el backend:", error);
    setMensaje("Error al conectar con el servidor. Intenta nuevamente más tarde.");
  }
}
