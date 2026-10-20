import { APP } from "../config/app.config.ts";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__in">
        <a href="#top" className="logo">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Logo do aplicativc"
            className="logo__mark"
            aria-hidden="true"
          />
          {APP.name}
        </a>
        <nav className="nav" aria-label="Seções">
          <a href="#seguranca">Avisos</a>
          <a href="#instalar">Como instalar</a>
          <a href="#problemas">Deu erro?</a>
        </nav>
      </div>
    </header>
  );
}
