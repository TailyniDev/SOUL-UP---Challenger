import logo from '../../assets/imgs/Logo.png';

export default function Cabecalho() {
  return (
    <header>
      <div className="Logo">
        <img src={logo} alt="Logo Soul-Up Rocket" />
      </div>
      <nav>
        <ul>
          <li>Inicial</li>
          <li>Integrantes</li>
          <li>Sobre</li>
          <li>FAQ</li>
          <li>Contato</li>
          <li>Solução</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}
