import React, { useState } from "react";

interface AdminLoginProps {
  onClose: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para verificar el usuario y la contraseña
    console.log("Usuario:", username, "Contraseña:", password);
  };

  return (
    <div className="relative p-6 bg-white rounded-lg shadow-md w-96">
      <button
        onClick={onClose}
        className="absolute text-gray-500 top-2 right-2 hover:text-gray-700"
      >
        <span className="text-xl">&times;</span>
      </button>
      <h2 className="mb-6 text-2xl font-semibold text-center">
        Iniciar sesión como administrador
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Usuario
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Usuario"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Contraseña"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
