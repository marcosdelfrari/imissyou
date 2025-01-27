import React from "react";
import Image from "next/image";
const Box = () => {
  return (
    <div
      className="w-full max-w-lg mx-auto p-6 bg-cover bg-center rounded-2xl shadow-lg"
      style={{
        backgroundImage: "url('/background.webp')", // Certifique-se de que este arquivo exista em `/public/`
      }}
    >
      <div className="bg-opacity-80 p-4 rounded-xl">
        <h1
          className="text-2xl font-bold text-gray-800 mb-4"
          style={{ fontFamily: "var(--font-sour-gummy)" }}
        >
          Querida Nayara,
        </h1>
        <p
          className="text-lg text-gray-700"
          style={{ fontFamily: "var(--font-sour-gummy)" }}
        >
          Ainda não sei o que escrever mas você nào sai da minha mente
        </p>
        <div className="m-auto w-full flex justify-center tems-center">
          <Image src="/flower.webp" alt="Heart" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Box;
