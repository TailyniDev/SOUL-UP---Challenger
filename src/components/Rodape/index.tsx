import { Link } from 'react-router'

export default function Rodape() {
  return (
    <footer className="bg-primary-dark text-emerald-100 px-4 pt-16 pb-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <p className="text-white font-bold text-lg mb-2">
            <span>🌿</span> SoulUp Rocket
          </p>
          <p className="text-sm text-emerald-200">
            Transformando pequenas ações em grandes mudanças.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Inicial
              </Link>
            </li>
            <li>
              <Link to="/integrantes" className="hover:text-white transition-colors">
                Integrantes
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:text-white transition-colors">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Parceria</h4>
          <p className="text-sm text-emerald-200 mb-2">🤝 SoulUp + FIAP</p>
          <p className="text-sm text-emerald-200">📧 challenge@soulup.com</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto border-t border-emerald-800 mt-10 pt-6 text-center">
        <p className="text-xs text-emerald-300">
          © 2026 SoulUpRocket - Challenge SoulUp | 2º Semestre
        </p>
      </div>
    </footer>
  );
}