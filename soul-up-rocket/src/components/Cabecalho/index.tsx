import logo from "../../assets/imgs/Logo.png";
import Menu from "../Menu";

export default function Cabecalho() {
  return (
    <header>
      <div className="Logo">
        <img src={logo} alt="Logo Soul-Up Rocket" />
      </div>
      <Menu />
    </header>
  );
}