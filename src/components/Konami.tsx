import React, { useState, useEffect } from "react";
import AdminLogin from "./AdminLogin"; // Asegúrate de importar AdminLogin correctamente

const KonamiCodeReveal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Definir el código Konami como un array de teclas
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
  ];

  const [userInput, setUserInput] = useState<string[]>([]);

  const handleKeyDown = (event: KeyboardEvent) => {
    setUserInput((prevInput) => [...prevInput, event.code]);

    // Verificar si la secuencia ingresada es la correcta
    if (userInput.length >= konamiCode.length - 1) {
      const inputSequence = [...userInput, event.code].slice(
        -konamiCode.length
      );
      if (inputSequence.join("") === konamiCode.join("")) {
        setIsVisible(true);
      }
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    // Agregar un listener para los eventos de teclado
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      // Limpiar el listener cuando el componente se desmonte
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [userInput]);

  return (
    <div className={isVisible ? "block" : "hidden"}>
      <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-center">
            ¡Has desbloqueado el formulario!
          </h2>
          {/* Mostrar el formulario de login aquí y pasar el handleClose como prop */}
          <AdminLogin onClose={handleClose} />
        </div>
      </div>
    </div>
  );
};

export default KonamiCodeReveal;
