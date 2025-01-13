import React, { useState, useEffect } from "react";

interface Slide {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
}

const slides: Slide[] = [
  {
    imageUrl: "https://picsum.photos/id/1015/1920/1080",
    title: "Slide 1",
    description: "This is the first slide.",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
  },
  {
    imageUrl: "https://picsum.photos/id/1016/1920/1080",
    title: "Slide 2",
    description: "This is the second slide.",
    tags: ["Tag 4", "Tag 5", "Tag 6"],
  },
  {
    imageUrl: "https://picsum.photos/id/1018/1920/1080",
    title: "Slide 3",
    description: "This is the third slide.",
    tags: ["Tag 7", "Tag 8", "Tag 9"],
  },
  {
    imageUrl: "https://picsum.photos/id/1019/1920/1080",
    title: "Slide 4",
    description: "This is the fourth slide.",
    tags: ["Tag 10", "Tag 11", "Tag 12"],
  },
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Avanza al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Retrocede al slide anterior
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  // Manejamos el intervalo para cambiar automáticamente las imágenes
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // 5000ms = 5 segundos

    // Limpiamos el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container px-4 py-16 mx-auto">
      <h2 className="mb-8 text-3xl font-semibold text-center">
        Publicaciones Recientes
      </h2>
      <div className="relative w-full max-w-3xl mx-auto">
        {/* Imagen del Slider */}
        <div className="overflow-hidden">
          <img
            src={slides[currentIndex].imageUrl}
            alt={`Slide ${currentIndex + 1}`}
            className="object-cover w-full h-auto transition-all duration-500"
          />
        </div>

        {/* Título y Descripción */}
        <div className="absolute text-white bottom-16 left-8">
          <h2 className="text-2xl font-bold">{slides[currentIndex].title}</h2>
          <p className="mt-2 text-lg">{slides[currentIndex].description}</p>
        </div>

        {/* Botones de Tags */}
        <div className="absolute flex space-x-4 bottom-4 left-8">
          {slides[currentIndex].tags.map((tag, index) => (
            <button
              key={index}
              className="px-4 py-1 text-sm text-white bg-blue-500 rounded-full hover:bg-blue-600"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Botones de Navegación */}
        <button
          onClick={prevSlide}
          className="absolute p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full left-4 top-1/2"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full right-4 top-1/2"
        >
          &gt;
        </button>

        {/* Barra de Puntos de Navegación */}
        <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
          {slides.map((_, index) => (
            <button
              type="button"
              title={`Slide ${index + 1}`}
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
