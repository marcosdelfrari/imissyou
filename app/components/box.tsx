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
          Você voltou aqui né kkk, foi um prazer dividir a vida com você, não vou apagar essa carta.
Uma das coisas que mais valorizo na vida é a oportunidade de aprender
          com o outro. Desde que te conheci, sempre admirei você. Infelizmente,
          nosso romance chegou ao fim em meio a um desarranjo emocional, mas a
          verdade é que você nunca saiu dos meus pensamentos. <br /> <br />
          Todos os dias penso em você e me pergunto se é por querer viver novos
          momentos ao seu lado ou resolver algo que ficou pendente. Talvez seja
          um pouco de tudo, mas a verdade é que ainda não consegui deixar você
          para trás. Quase dois meses se passaram, e você ainda ocupa um lugar
          importante na minha mente. <br />
          <br />
          Sei que tentar uma reaproximação pode ser arriscado, mas acredito que
          a beleza da vida está justamente nos riscos que escolhemos enfrentar.
          Eu ainda te amo.
        </p>
        <div className="m-auto w-full flex justify-center tems-center">
          <Image src="/flower.webp" alt="Heart" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Box;
