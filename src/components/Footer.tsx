import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 text-gray-600 shadow-md dark:text-[#D9D9D9] bg-lightTertiary body-font dark:bg-gray-900">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Sección de Enlaces */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-lightPrimary dark:text-darkFourth">
              Enlaces rápidos
            </h3>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Sección de Redes Sociales */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-lightPrimary dark:text-darkFourth">
              Síguenos
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="dark:text-white hover:text-blue-400 dark:hover:text-blue-400"
                title="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="dark:text-white hover:text-blue-400 dark:hover:text-blue-400"
                title="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="dark:text-white hover:text-blue-400 dark:hover:text-blue-400"
                title="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          {/* Sección de Derechos */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-lightPrimary dark:text-darkFourth">
              Sobre el Blog
            </h3>
            <p className="text-sm">
              Blog dedicado sobre periodismo e informal sobre diferentes casos y
              temas del mundo criminal y otros temas controversial que ocurre
              debajo de nuestras narices sin darnos cuentas. <br /> &copy;{" "}
              {year}
            </p>
          </div>
        </div>
        {/* Línea de separación */}
        <div className="pt-4 mt-8 text-sm text-center border-t border-gray-700 text-lightPrimary dark:text-darkFourth dark:border-white">
          <p>&copy; {year} Bajo del Radar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
