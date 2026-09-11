import logo from "../../assets/imgs/Logo.png";
import Menu from "../Menu";

export default function Cabecalho() {
  return (
    <header className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] sticky top-0 z-[100]">
      <div className="flex justify-between items-center py-4 px-5">
        <div className="w-36">
          <img src={logo} alt="Logo Soul-Up Rocket" />
        </div>
        <Menu />
      </div>
    </header>
  );
}