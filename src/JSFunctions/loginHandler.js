export async function loginHandler(correo, contrasena, navigate, setMensaje) {

  // Validación básica
  if (!correo || !contrasena) {
    setMensaje("Por favor completa todos los campos.");
    return;
  }

  try {
    // LOGIN REAL al backend
    const respuesta = await fetch("https://comic-shop-backend.onrender.com/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: correo,
        password: contrasena,
      }),
    });

    if (!respuesta.ok) {
      let errorMsg = "Credenciales inválidas.";

      try {
        const dataError = await respuesta.json();
        if (dataError.message) errorMsg = dataError.message;
      } catch {}

      setMensaje(errorMsg);
      return;
    }

    // Respuesta del backend
    const data = await respuesta.json(); 
    // { token, user: { rol, nombre, email } }

    // Guardar datos de sesión
    localStorage.setItem("token", data.token);
    localStorage.setItem("usuarioRol", data.user.rol);
    localStorage.setItem("usuarioNombre", data.user.nombre);
    localStorage.setItem("usuarioCorreo", data.user.email);

    setMensaje("Inicio de sesión exitoso");

    window.dispatchEvent(new Event("login-change"));

    // Redirección por rol
    setTimeout(() => {
      if (data.user.rol === "admin") {
        window.location.href = "/admin-panel";
      } else {
        window.location.href = "/";
      }
    }, 800);

  } catch (error) {
    console.error("Error al conectar con backend:", error);
    setMensaje("Error al conectar con el servidor.");
  }
}
