"use client"

import { useState } from "react";

export default function Home() {

  const [nome, setNome] = useState("");
  const [xp, setXp] = useState<number | "">("");
  const [resultado, setResultado] = useState("");
  const niveis = [
    { min: 0, max: 1000, nivel: "Ferro" },
    { min: 1001, max: 2000, nivel: "Bronze" },
    { min: 2001, max: 5000, nivel: "Prata" },
    { min: 5001, max: 7000, nivel: "Ouro" },
    { min: 7001, max: 8000, nivel: "Platina" },
    { min: 8001, max: 9000, nivel: "Ascendente" },
    { min: 9001, max: 10000, nivel: "Imortal" },
    { min: 10001, max: Infinity, nivel: "Radiante" },
  ];

  const classificarHeroi = () => {
    if (xp === "") return;

    for (let i = 0; i < niveis.length; i++) {
      if (xp >= niveis[i].min && xp <= niveis[i].max) {
        nivel = niveis[i].nivel;
        break;
      }
    }
    setResultado(`O Herói de nome ${nome} está no nível de ${nivel}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
      <div className="bg-black shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Classificador de Nível de Herói
        </h1>

        
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Digite o nome do herói"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="border rounded-lg px-3 py-2"
          />

          <input
            type="number"
            placeholder="Digite o XP"
            value={xp}
            onChange={(e) => setXp(e.target.value === "" ? "" : Number(e.target.value))}
            className="border rounded-lg px-3 py-2"
          />

          <button
            onClick={classificarHeroi}
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Classificar
          </button>
        </div>

        {resultado && (
          <p className="mt-4 text-lg font-medium text-center text-green-700">
            {resultado}
          </p>
        )}
      </div>
    </main>
  )
}
