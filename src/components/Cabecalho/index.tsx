import { useState } from "react";
import logo from "../../assets/imgs/Logo.png";
import Menu from "../Menu";

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] sticky top-0 z-[100]">
      <div className="flex flex-wrap justify-between items-center py-4 px-5">
        <div className="w-28 sm:w-36">
          <img src={logo} alt="Logo Soul-Up Rocket" />
        </div>

        <button
          type="button"
          onClick={() => setMenuAberto((aberto) => !aberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          aria-controls="menu-principal"
          className="lg:hidden text-3xl leading-none text-text px-2"
        >
          {menuAberto ? "✕" : "☰"}
        </button>

        <Menu aberto={menuAberto} aoNavegar={() => setMenuAberto(false)} />
      </div>
    </header>
  );
}