import React, { useEffect, useState } from "react";
import { FaDesktop, FaSun, FaMoon } from "react-icons/fa";

const ButtonTheme: React.FC = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "system"
  );

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const options = [
    { icon: <FaSun />, text: "light" },
    { icon: <FaDesktop />, text: "system" },
    { icon: <FaMoon />, text: "dark" },
  ];

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };

  useEffect(() => {
    onWindowMatch();
    darkQuery.addEventListener("change", onWindowMatch);

    return () => {
      darkQuery.removeEventListener("change", onWindowMatch);
    };
  }, []);

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  return (
    <div className="flex items-center space-x-3">
      {options.map((item) => (
        <button
          key={item.text}
          type="button"
          onClick={() => setTheme(item.text)}
          className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors 
            ${
              theme === item.text
                ? "bg-sky-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            } 
            hover:bg-sky-500 dark:hover:bg-sky-500`}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
};

export default ButtonTheme;
