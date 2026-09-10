import { Link } from "react-router";

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicial</Link>
        </li>
        <li>
          <Link to="/integrantes">Integrantes</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
        <li>
          <Link to="/solucao">Solução</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}