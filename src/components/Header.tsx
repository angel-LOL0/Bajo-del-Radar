import React from "react";
import ButtonTheme from "./ButtonTheme";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 z-[100] w-full text-gray-600 dark:text-white bg-lightPrimary shadow-md body-font dark:bg-gray-900">
      <div className="container flex flex-col flex-wrap items-center justify-between p-5 mx-auto md:flex-row">
        {/* Logo */}
        <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
          <span className="ml-3 text-xl text-gray-900 dark:text-white">
            Bajo del Radar
          </span>
        </a>
        {/* Navegación */}
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
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
