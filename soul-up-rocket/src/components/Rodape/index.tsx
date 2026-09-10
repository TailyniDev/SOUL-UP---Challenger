import { Link } from 'react-router-dom'

export default function Rodape() {
  return (
    <footer>
      <div><span>🌿</span> SoulUp Rocket<p>Transformando pequenas ações em grandes mudanças.</p></div>
      <div>
        <h4>Links Rápidos</h4>
        <ul><li>
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
        </ul>
      </div>

      <div>
        <h4>Parceria</h4>
        <p>🤝 SoulUp + FIAP</p>
        <p>📧 challenge@soulup.com</p>
      </div>

      <div>
        <p>© 2026 SoulUpRocket - Challenge SoulUp | 2º Semestre</p>
      </div>
    </footer>
  );
}