import moment1 from "@/assets/moment-1.jpg";
import moment2 from "@/assets/moment-2.jpg";
import moment3 from "@/assets/moment-3.jpg";
import moment4 from "@/assets/moment-4.jpg";
import moment5 from "@/assets/moment-5.jpg";
import moment6 from "@/assets/moment-6.jpg";
import moment7 from "@/assets/moment-7.jpg";
import moment8 from "@/assets/moment-8.jpg";
import moment9 from "@/assets/moment-9.jpg";
import moment10 from "@/assets/moment-10.jpg";
import moment11 from "@/assets/moment-11.jpg";
import moment12 from "@/assets/moment-12.jpg";
import moment13 from "@/assets/moment-13.jpg";
import moment14 from "@/assets/moment-14.jpg";
import moment15 from "@/assets/moment-15.jpg"
import { HeartIcon } from "./HeartIcon";

const defaultMoments = [
  {
    date: "23/12/2023",
    title: "Quando tudo começou",
    text: "Eu ainda lembro do nervosismo que eu estava sentindo naquele dia. Só de pensar que eu finalmente ia tocar na pessoa que tanto desejei pela tela do celular por pouco mais de 3 meses. Eu lembro de tudo desse dia, de você, da minha sogra a da vó Edna olhando pra mim e eu sem nem saber oque falar, mas aos poucos fui me soltando; Depois disso a gente foi no play center, tiramos um monte de fotos e ficamos a tarde inteira por lá até dar a hora de ir embora, lembro da gente no cantinho da saida do shopping só esperando meu sogro chegar pra buscar vocês e a gente lá conversando como se tivessemos todo tempo do mundo.",
    image: moment1,
  },
  {
    date: "24/12/2023",
    title: "Primeiro natal juntos",
    text: "Quem diria que a nossa primeira data comemorativa juntos seria logo no Natal, né? Eu lembro como se fosse ontem… a gente saindo toda hora pra caminhar, só pra ter mais tempo de conversar, andando pelo condomínio que você morava. E o mais louco é que até hoje eu lembro daquele cantinho que era nosso, onde a gente sentava, conversava sobre tudo e parecia que o tempo simplesmente parava. Era simples… mas, ao mesmo tempo, era tudo. Lembro até da vergonha que passei perguntando pros meus sogros se a gente pode ir ver netflix, lembro tambem da gente TENTANDO jogar vôlei e... coitada de você...",
    image: moment2,
  },
  {
    date: "26/01/2024",
    title: "Nossa primeira 'Viagem'",
    text: "Pouco depois de nos vermos pela primeira vez, fui à casa de uma prima em Suzano, até aí, era só mais uma viagem comum. Mas foi lá que descobrimos que minha prima tinha sido sua melhor amiga de infância. Esse foi o motivo do nosso segundo encontro: uma amizade muito antiga que nenhum de nós imaginava que voltaria à tona.",
    image: moment3,
  },
  {
    date: "04/02/2024",
    title: "Gin gastro bar",
    text: "Lembro até hoje da primeira vez que saímos para jantar com meus sogros. Eu estava usando a camiseta que você me deu de presente, e ainda guardo o chaveiro que fizemos juntos naquele dia. Foi depois disso que tive certeza de que os passeios com meus sogros seriam os mais malucos e especiais e 2 anos e 3 meses depois, tenho certeza disso.",
    image: moment5,
  },
  {
    date: "17/05/2024",
    title: "PRIMEIRA VEZ NA PRAIA",
    text: "Claro que não poderia faltar: a primeira vez que fomos para a praia. Simplesmente inesquecível, não tem outra palavra pra descrever. A vista linda, nossas saidinhas ao centrinho à noite, aquele pastel enorme que você não conseguiu terminar... Aquela sensação de estar na praia somada à alegria de estar com você transformou essa viagem em uma das melhores da minha vida(se não, a melhor).  Lembro da roda-gigante, lembro daquele brinquedo doido de girar que deixou você enjoada depois, eu lembro de absolutamente tudo que fizemos juntos em TODAS as viagens, se me perguntarem se lembro de você tropeçando na entrada do bangalô que a gente tava, eu lembro",
    image: moment6,
  },
  {
    date: "23/11/2024",
    title: "Evento de carro",
    text: "Depois da praia vieram os eventos de carro, mas só achei foto nossa nesse evento. Não tinha só carro, tinha avião, helicóptero, e eu lembro até da batata recheada que a gente comeu. Sem meu sogrão, esse dia jamais teria acontecido.",
    image: moment7,
  },
  {
    date: "19/04/2025",
    title: "Tiete",
    text: "Esses dias foram quentes hein amor, mas oque realmente importa é que esse foi mais um momento que entrou pra historia do nosso relacionamento, podemos perceber que as melhores viagens sempre são com os meus sogros né amor. ",
     image: moment8,
  },
  {
    date: "17/05/2025",
    title: "Aniversario de 14 aninhos",
    text: "Já que estamos falando de datas importantes, não podemos esquecer do seu aniversário de 14 aninhos. 510 dias depois de nos conhecermos estávamos passando seu segundo aniversário juntos e não sei se já falei isso, mas se eu pudesse voltar e ter feito algo diferente eu teria feito tudo igual amor. Esse dia foi muito doido cara, sua prima com Parkinson, vi a Mafe pela primeira vez e foi a primeira vez que o Kaue foi na sua casa. Amor lembro até de mim discutindo com sua sogra porque eu queria chegar mais cedo.",
     image: moment9,
  },
  {
    date: "01/11/2025",
    title: "Nossa primeira vez no cinema",
    text: "Nossa primeira vez no cinema foi para assistir Noiva Cadáver. Esse dia foi simplesmente maravilhoso, a experiência de assistir um filme com você é totalmente diferente de qualquer outra experiência que eu já tive, meu amor. Sabe, eu sinto como se eu pudesse ser eu mesmo porque ali, vendo aquele filme sozinho com você, eu estava com a minha melhor amiga e minha namorada ao mesmo tempo, sabe. Tipo, essa é minha primeira vez no cinema assistindo um filme com a pessoa que quero me casar, não tem dinheiro que compre este momento.",
     image: moment10,
  },
  {
    date: "31/12/2025",
    title: "Nosso primeiro ano novo juntos",
    text: "738 dias depois da gente se ver pela primeira vez e passarmos 2 viradas de ano separados, IMPOSSÍVEL esquecer qualquer coisa desse dia, amor. Sabe, pra mim ano novo não é só mais uma data, é o reflexo de quem nós fomos o ano inteiro. Quando acontece uma virada de ano normalmente começamos a criar um monte de metas, isso é natural, mas o maior reflexo de que não atingimos nossas metas são as pessoas ao nosso redor. Eu sempre quis passar o ano novo somente ao lado de quem eu amo, mas sempre tinha uma pessoa ali que não me fazia bem, sempre tinha uma pessoa que não me apoiava e só tentava me jogar para baixo. Mas essa virada de ano foi diferente, eu estava exatamente onde eu gostaria de estar, eu estava exatamente onde eu deveria estar, ao seu lado e ao lado de quem me apoiou.",
      image: moment12,
  },
  {
    date: "10/01/2026",
    title: "Bertioga",
    text: " Acho que em menos de 3 anos eu já fui mais pra praia com você e meus sogros do que fui na minha vida inteira, amor. E essa foi uma das viagens mais malucas que a gente já fez né KKKK. A ideia era ficar só 1 dia… aí decidimos ficar 2. Eu perdi um chinelo, comprei outro escondido sem sua sogra saber ksksks, falamos que íamos voltar de tarde e no final voltamos super tarde. Lembro até da sua sogra ficando brava comigo porque eu tinha prometido voltar no mesmo dia… e mesmo assim ainda fui dormir na sua casa KKKKK.A gente percebe que quase toda vez que vai fazer alguma coisa juntos, alguma coisa dá errado no caminho. Mas é engraçado porque isso nunca estragou nenhum date nosso. Pelo contrário, acho que é exatamente isso que faz tudo ficar mais inesquecível. Eu nunca me arrependi de nenhum momento com você, amor. E sinceramente? Eu tenho muito orgulho de viver tudo isso ao seu lado. Cada viagem, cada passeio, cada situação aleatória. Eu nunca trocaria esses momentos por nada nesse mundo.",
    image: moment13,
  },
  {
    date: "28/03/2026",
    title: "Crepusculo",
    text: "Nossa segunda vez no cinema foi pra assitir esse filme que nunca imaginei que iria assitir no cinema AINDA MAIS COM UMA GAROTA SABE. Oque eu não faço por essa mulher maravilhosa não é mesmo.",
     image: moment14,
  },

  {
    date: "28/03/2026",
    title: "CARAGUA DENOVO",
    text: "Os melhores dias da minha vida sempre foram com você, amor, mas esses dias em específico foram os mais perfeitos da minha vida. Dessa vez eu não voltei pra casa ardido, não pegamos trânsito, não perdi nada… foram só dias de calor, mar, você, vôlei e 51 ksksks. Essa foi uma das melhores viagens que eu já fiz na minha vida, amor, tudo foi perfeito. E um dos meus momentos favoritos foi a gente indo comprar pão na padaria de manhã, acredita amor? Só eu e você fazendo uma caminhadinha juntos, nós dois bem um com o outro e o clima simplesmente perfeito. Eu amei absolutamente tudo nessa viagem, amor. E mais uma vez eu tenho que agradecer por essas viagens malucas, porque de algum jeito você sempre consegue fazer tudo ficar melhor.",
     image: moment15,
  },

  {
    date: "01/05/2026",
    title: "Kartódromo de interlagos - Senna",
    text: "Nosso date mais recente, amor, e também foi a primeira vez na minha vida que eu vi uma pista de corrida de verdade KKKK. E de novo eu fico pensando no quanto é incrível como meus sogros sempre acabam levando a gente pra viver coisas diferentes. Sério amor, se não fosse por eles eu duvido muito que a gente teria vivido tanta coisa em tão pouco tempo. Em menos de 3 anos a gente já criou memórias que eu tenho certeza que vou lembrar pro resto da minha vida, meu amor.",
     image: moment14,
  },
];

export const Timeline = () => (
  <section className="py-24 px-6 bg-gradient-soft relative">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-20 animate-fade-up">
        <p className="font-script text-2xl text-primary mb-2">Nossa história</p>
        <h2 className="text-5xl md:text-6xl text-foreground">
          Momentos que guardo no peito
        </h2>
        <div className="flex justify-center mt-6">
          <div className="h-px w-24 bg-gradient-gold" />
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:-translate-x-px"
          aria-hidden="true"
        />

        {defaultMoments.map((m, i) => (
          <div
            key={i}
            className={`relative mb-20 md:mb-32 flex flex-col md:flex-row items-center gap-8 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="absolute left-4 md:left-1/2 w-4 h-4 md:-translate-x-1/2 z-10">
              <HeartIcon className="w-4 h-4 text-primary animate-shimmer" />
            </div>

            <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
              <div className="overflow-hidden rounded-2xl shadow-petal group">
                <img
                  src={m.image}
                  alt={m.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
              <p className="font-script text-xl text-primary mb-2">{m.date}</p>
              <h3 className="text-3xl md:text-4xl text-foreground mb-4">
                {m.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed text-lg">
                {m.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
