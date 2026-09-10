import logo from "../../assets/imgs/Logo.png";
import { Link } from 'react-router';

export default function Cabecalho() {
  return (
    <header>
      <div className="Logo">
        <img src={logo} alt="Logo Soul-Up Rocket" />
      </div>
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
    </header>
  );
}
