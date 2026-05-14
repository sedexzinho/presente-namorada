import { HeartIcon } from "./HeartIcon";
import { FloatingPetals } from "./FloatingPetals";

export const BirthdayMessage = () => (
  <section className="relative py-28 px-6 bg-gradient-romance overflow-hidden">
    <FloatingPetals />
    <div className="relative max-w-2xl mx-auto bg-card/80 backdrop-blur-sm rounded-3xl p-10 md:p-16 shadow-petal animate-fade-up text-center">
      <div className="flex justify-center mb-6">
        <HeartIcon className="w-14 h-14 text-primary animate-shimmer" />
      </div>
      <p className="font-script text-3xl text-primary mb-4">Hoje é o seu dia meu amor</p>
      <h2 className="text-5xl md:text-6xl text-gradient-gold italic mb-8">
        Feliz 15 anos!
      </h2>
      <div className="space-y-5 text-foreground/80 leading-relaxed text-lg italic font-light text-left">
        <p>
          15 anos parecem muita coisa pra quem ja viu essa menininha com menos de 1 metro de altura e com as bochehas gordinhas. Mas um dos melhores sentimentos que ja senti foi saber que sempre, mesmo sem saber, sempre estive lá com você
        </p>
        <p>
          E quanto mais o tempo passa, mais eu tenho certeza do quanto você é especial pra mim. Não é só sobre carinho ou admiração… é algo mais profundo, mais forte, algo que eu sinto em cada detalhe, em cada lembrança, em cada momento com você.
        </p>
        <p>
          Eu desejo, meu amor, que esse novo ciclo te abrace da forma mais bonita possível. Que você realize tudo o que sonha, que nunca te falte amor, cuidado, paz e pessoas verdadeiras ao seu redor. Mas, acima de tudo, eu espero que você nunca esqueça o quanto você é amada de um jeito intenso, sincero e sem medida.
        </p>
        <p>
          Se o mundo algum dia parecer pesado demais, eu quero ser o seu lugar de descanso. Se tudo parecer incerto, eu quero ser a sua certeza. E em cada fase da sua vida, eu quero continuar estando ao seu lado, não por acaso… mas por escolha.
        </p>
        <p>
          Obrigado por ser quem você é. Por existir do seu jeito, com essa essência que me encanta todos os dias.
        </p>
        <p>
          Eu te admiro, te quero e te amo muito mais do que qualquer palavra conseguiria explicar.
        </p>
      </div>
      <p className="font-script text-3xl text-primary mt-10">
        Te amo, hoje e sempre. ♡
      </p>
    </div>
  </section>
);
