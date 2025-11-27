import { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

  // Estado reactivo de la sesión
  const [usuarioCorreo, setUsuarioCorreo] = useState(localStorage.getItem("usuarioCorreo"));

  // Escucha cambios en localStorage (login y logout)
  useEffect(() => {
    const handler = () => {
      setUsuarioCorreo(localStorage.getItem("usuarioCorreo"));
    };

    window.addEventListener("storage", handler);

    return () => {
      window.removeEventListener("storage", handler);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ usuarioCorreo, setUsuarioCorreo }}>
      {children}
    </AuthContext.Provider>
  );
};
