import { useState } from "react";
import { HeartIcon } from "./HeartIcon";
import { FloatingPetals } from "./FloatingPetals";

export const LoveLetter = ({ name }: { name: string }) => {
  const [isSecondLetter, setIsSecondLetter] = useState(false);

  const firstLetter = (
    <div className="space-y-5 text-foreground/80 leading-relaxed text-lg italic font-light">
      <p>
        Hoje é o seu dia meu amor, e antes de qualquer presente, eu queria te dar palavras,
        porque foram as palavras, as suas, que primeiro me fizeram sentir em amado e em casa.
      </p>
      <p>
        Obrigado por todas as vezes em que estivemos juntos, ate em momentos ruins, por cada risada do nada,
        pelas brigas bobas que as vezes acabam em abraço,mas sempre terminamos felizes, e pelos silêncios
        que dizem mais do que mil palavras.
      </p>
      <p>
        Que esse novo ano da sua vida seja exatamente como você merece:
        leve, doce, cheio de luz e, se tiver muita sorte, cheio de mim também.
      </p>
      <p className="font-script text-2xl not-italic text-primary text-right pt-4">
        Te amo, hoje e sempre. ♡
      </p>
    </div>
  );

  const secondLetter = (
    <div className="space-y-5 text-foreground/80 leading-relaxed text-lg italic font-light">
      <p>
        Continuando minha carta de amor, quero te dizer que cada dia ao seu lado é uma bênção.
        Você trouxe cores à minha vida cinza, e agora vejo o mundo através dos seus olhos brilhantes.
      </p>
      <p>
        Obrigado por ser você, por me aceitar como sou, e por me ensinar o verdadeiro significado do amor.
        Que este novo capítulo da sua vida seja repleto de aventuras, risadas e, claro, muito amor.
      </p>
      <p className="font-script text-2xl not-italic text-primary text-right pt-4">
        Sempre seu, com todo o coração. ♡
      </p>
    </div>
  );

  return (
    <section className="relative py-24 px-6 bg-gradient-romance overflow-hidden">
      <FloatingPetals />
      <div className="relative max-w-2xl mx-auto bg-card/80 backdrop-blur-sm rounded-3xl p-10 md:p-16 shadow-petal animate-fade-up">
        <div className="flex justify-center mb-6">
          <HeartIcon className="w-12 h-12 text-primary" />
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex-1"></div>
          <h2 className="text-center text-4xl md:text-5xl text-foreground">Para você, {name}</h2>
          {!isSecondLetter && (
            <button
              onClick={() => setIsSecondLetter(true)}
              className="text-primary hover:text-primary/80 transition-colors ml-4"
              aria-label="Próximo texto"
            >
              →
            </button>
          )}
          {isSecondLetter && (
            <button
              onClick={() => setIsSecondLetter(false)}
              className="text-primary hover:text-primary/80 transition-colors mr-4"
              aria-label="Voltar"
            >
              ←
            </button>
          )}
        </div>
        <p className="text-center font-script text-2xl text-primary mb-10">com todo o meu amor</p>

        {isSecondLetter ? secondLetter : firstLetter}
      </div>
    </section>
  );
};
