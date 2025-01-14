import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ButtonTheme from "./ButtonTheme"; // Asegúrate de que tu botón de cambio de tema esté importado correctamente

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-[100] w-full text-gray-600 dark:text-white bg-lightPrimary shadow-md body-font dark:bg-gray-900">
      <div className="container flex flex-col flex-wrap items-center justify-between p-5 mx-auto md:flex-row">
        {/* Logo */}
        <a className="flex items-center font-medium text-gray-900">
          <span className="text-xl text-gray-900 dark:text-white">
            Bajo del Radar
          </span>
        </a>

        {/* Botón de menú en pantallas pequeñas */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
          >
            <GiHamburgerMenu className="w-6 h-6" />
          </button>
        </div>

        {/* Navegación */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex flex-wrap items-center justify-center text-base md:ml-auto`}
        >
          <a className="mr-5 hover:text-gray-900 dark:hover:text-white">
            Categorias
          </a>
          <a className="mr-5 hover:text-gray-900 dark:hover:text-white">
            Populares
          </a>
          <a className="mr-5 hover:text-gray-900 dark:hover:text-white">
            Recien Integrados
          </a>
          <a className="mr-5 hover:text-gray-900 dark:hover:text-white">FAQ</a>
        </nav>

        {/* Botón de cambio de tema */}
        <ButtonTheme />
      </div>
    </header>
  );
};

export default Header;
