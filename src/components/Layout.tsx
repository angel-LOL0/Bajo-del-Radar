import Footer from "./Footer";
import Header from "./Header";
import React, { useEffect, useState } from "react";

interface LayoutProps {
  title: string;
  metaDescription: string; // Prop para la descripción de la página
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  title,
  metaDescription,
  children,
}) => {
  const [originalTitle, setOriginalTitle] = useState<string>(document.title);
  const [originalDescription, setOriginalDescription] = useState<string>(
    document
      .querySelector("meta[name='description']")
      ?.getAttribute("content") || ""
  );

  useEffect(() => {
    // Actualizar el título de la página
    document.title = title;

    // Actualizar la meta descripción de la página
    const metaTag = document.querySelector(
      "meta[name='description']"
    ) as HTMLMetaElement;
    if (metaTag) {
      metaTag.setAttribute("content", metaDescription);
    } else {
      // Si no existe la meta descripción, la creamos
      const newMetaTag = document.createElement("meta");
      newMetaTag.setAttribute("name", "description");
      newMetaTag.setAttribute("content", metaDescription);
      document.head.appendChild(newMetaTag);
    }

    // Cambiar el título y la descripción cuando el usuario cambie de pestaña
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Bajo del Radar"; // Título temporal cuando la página no es visible
      } else {
        document.title = title; // Restaurar el título original cuando el usuario regresa a la pestaña
      }
    };

    // Guardamos los valores originales al cargar el componente
    setOriginalTitle(document.title);
    setOriginalDescription(metaDescription);

    // Añadir el listener para los cambios de visibilidad de la página
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      // Restaurar el título y la descripción original cuando el componente se desmonte
      document.title = originalTitle;
      const originalMetaTag = document.querySelector(
        "meta[name='description']"
      ) as HTMLMetaElement;
      if (originalMetaTag) {
        originalMetaTag.setAttribute("content", originalDescription);
      }
    };
  }, [title, metaDescription, originalTitle, originalDescription]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
