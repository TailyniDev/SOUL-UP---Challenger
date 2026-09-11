import { NavLink } from "react-router";


export default function Menu() {
  return (
    <nav>
      <ul className="flex gap-8 items-center list-none">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-medium" : "text-text font-medium hover:text-primary transition-colors"}>Inicial</NavLink></li>
        <li><NavLink to="/integrantes" className={({ isActive }) => isActive ? "text-primary font-medium" : "text-text font-medium hover:text-primary transition-colors"}>Integrantes</NavLink></li>
        <li><NavLink to="/sobre" className={({ isActive }) => isActive ? "text-primary font-medium" : "text-text font-medium hover:text-primary transition-colors"}>Sobre</NavLink></li>
        <li><NavLink to="/faq" className={({ isActive }) => isActive ? "text-primary font-medium" : "text-text font-medium hover:text-primary transition-colors"}>FAQ</NavLink></li>
        <li><NavLink to="/contato" className={({ isActive }) => isActive ? "text-primary font-medium" : "text-text font-medium hover:text-primary transition-colors"}>Contato</NavLink></li>
        <li><NavLink to="/solucao" className={({ isActive }) => isActive ? "text-primary font-medium" : "text-text font-medium hover:text-primary transition-colors"}>Solução</NavLink></li>
        <li><NavLink to="/missoes" className={({ isActive }) => isActive ? "text-primary font-medium" : "text-text font-medium hover:text-primary transition-colors"}>Missões</NavLink></li>
      </ul>
    </nav>
  );
}