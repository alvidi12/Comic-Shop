export async function loginHandler(correo, contrasena, navigate, setMensaje) {

  // Validación de campos vacíos (SE MANTIENE)
  if (!correo || !contrasena) {
    setMensaje("Por favor completa todos los campos.");
    return;
  }

  // Dominios permitidos para usuarios normales (SE MANTIENE)
  const dominiosPermitidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];

  // Si NO es admin, entonces validar dominio
  const esAdmin = correo.toLowerCase() === "admin1234@admin.cl";

  if (!esAdmin) {
    const tieneDominioValido = dominiosPermitidos.some((dom) =>
      correo.endsWith(dom)
    );

    if (!tieneDominioValido) {
      setMensaje(
        "Correo no válido. Solo se aceptan dominios @duoc.cl, @profesor.duoc.cl o @gmail.com."
      );
      return;
    }
  }

  //   LOGIN REAL contra el backend en Render
  try {
    const respuesta = await fetch("https://comic-shop-backend.onrender.com/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: correo,
        password: contrasena,
      }),
    });

    if (!respuesta.ok) {
      let errorMsg = "Credenciales inválidas. Verifica correo y contraseña.";

      try {
        const dataError = await respuesta.json();
        if (dataError.message) errorMsg = dataError.message;
      } catch {}

      setMensaje(errorMsg);
      return;
    }

    //Guardamos token válido
    const data = await respuesta.json(); // { token, user }

    //Guardamos datos del usuario
    localStorage.setItem("token", data.token);
    localStorage.setItem("usuarioRol", data.user?.rol || "user");
    localStorage.setItem("usuarioNombre", data.user?.nombre || "");
    localStorage.setItem("usuarioCorreo", data.user?.email || correo);

    setMensaje("¡Inicio de sesión exitoso! Redirigiendo...");

    // Redirección según rol (FORZAMOS RECARGA COMPLETA DE LA APP)
    setTimeout(() => {
      if (data.user?.rol === "admin") {
        window.location.href = "/admin-panel";
      } else {
        window.location.href = "/";
      }
    }, 900);

  } catch (error) {
    console.error("Error al conectarse con el backend:", error);
    setMensaje("Error al conectar con el servidor. Intenta nuevamente más tarde.");
  }
}
