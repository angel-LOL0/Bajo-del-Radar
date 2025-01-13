import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedComponent = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Asesinatos",
        "Robos",
        "Violaciones",
        "Secuestros",
        "Extorsiones",
        "Narcotráfico",
        "Corrupción",
      ],
      stringsElement: "#cadenas-texto", // ID del elemento que contiene cadenas de texto a mostrar.
      typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
      startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
      backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
      smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
      shuffle: true, // Alterar el orden en el que escribe las palabras.
      backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
      loop: true, // Repetir el array de strings
      showCursor: true, // Mostrar cursor palpitanto
      cursorChar: "|", // Caracter para el cursor
      contentType: "html", // 'html' o 'null' para texto sin formato
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} />;
};

export default TypedComponent;
