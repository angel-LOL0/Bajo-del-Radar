import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="py-8 mt-12 text-gray-600 bg-white shadow-md body-font dark:bg-gray-900">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Sección de Enlaces */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Enlaces rápidos</h3>
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
            <h3 className="mb-4 text-lg font-semibold">Síguenos</h3>
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
            <h3 className="mb-4 text-lg font-semibold">Sobre el Blog</h3>
            <p className="text-sm">
              Blog personal sobre tecnología, desarrollo web y otros temas
              interesantes. &copy; {year}
            </p>
          </div>
        </div>
        {/* Línea de separación */}
        <div className="pt-4 mt-8 text-sm text-center border-t border-gray-700 dark:border-white">
          <p>&copy; {year} Mi Blog. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
