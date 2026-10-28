import { NavLink } from "react-router";

const LINKS = [
  { to: "/", rotulo: "Inicial" },
  { to: "/integrantes", rotulo: "Integrantes" },
  { to: "/sobre", rotulo: "Sobre" },
  { to: "/faq", rotulo: "FAQ" },
  { to: "/contato", rotulo: "Contato" },
  { to: "/missoes", rotulo: "Missões" },
  { to: "/vouchers", rotulo: "Vouchers" },
  { to: "/login", rotulo: "Login" },
  
];

type MenuProps = {
  aberto: boolean;
  aoNavegar: () => void;
};

export default function Menu({ aberto, aoNavegar }: MenuProps) {
  return (
    <nav
      id="menu-principal"
      className={`${aberto ? "block" : "hidden"} w-full lg:block lg:w-auto`}
    >
      <ul className="flex flex-col gap-4 py-4 list-none lg:flex-row lg:gap-8 lg:items-center lg:py-0">
        {LINKS.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              onClick={aoNavegar}
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-medium"
                  : "text-text font-medium hover:text-primary transition-colors"
              }
            >
              {link.rotulo}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}