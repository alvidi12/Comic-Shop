import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  // Usuario actual REACTIVO
  const [usuarioCorreo, setUsuarioCorreo] = useState(
    localStorage.getItem("usuarioCorreo") || null
  );

  // LOGIN: Notifica a React
  const login = (correo) => {
    localStorage.setItem("usuarioCorreo", correo);
    setUsuarioCorreo(correo);
  };

  // LOGOUT: Limpia sesión
  const logout = () => {
    localStorage.removeItem("usuarioCorreo");
    setUsuarioCorreo(null);
  };

  return (
    <AuthContext.Provider value={{ usuarioCorreo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
