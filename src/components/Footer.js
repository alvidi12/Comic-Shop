import { Link } from "react-router-dom";
import "../styles/Components.css"

export default function Footer() {
  return (
    <div className="footerComponent">
    <footer className="text-white text-center py-4 mt-5">
      <Link to="/contacto" className="btn btn1">Contáctanos</Link>
      <p>&copy; Todos los derechos reservados 😸</p>
    </footer>
</div>
  );
}
