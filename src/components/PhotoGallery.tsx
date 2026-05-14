import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import photo2 from "@/assets/moment-1.jpg";
import photo3 from "@/assets/moment-2.jpg";
import photo4 from "@/assets/moment-3.jpg";
import photo5 from "@/assets/moment-4.jpg";
import photo6 from "@/assets/moment-5.jpg";
import photo7 from "@/assets/moment-6.jpg";
import photo8 from "@/assets/moment-7.jpg";
import photo9 from "@/assets/moment-8.jpg";
import photo10 from "@/assets/moment-9.jpg";
import photo11 from "@/assets/moment-10.jpg";
import photo12 from "@/assets/moment-11.jpg";
import photo13 from "@/assets/moment-12.jpg";
import photo14 from "@/assets/moment-15.jpg";
import photo18 from "@/assets/moment-20.jpg";
import photo15 from "@/assets/moment-17.jpg";
import photo16 from "@/assets/moment-18.jpg";
import photo17 from "@/assets/moment-19.jpg";
import photo19 from "@/assets/moment-21.jpg";

const photos = [
  { src: photo2, alt: "Nosso primeiro café", caption: "O começo de tudo, nosso primeiro encontro" },
  { src: photo3, alt: "Pés na areia", caption: "Nosso primeiro Natal juntos" },
  { src: photo4, alt: "Piquenique", caption: "Indo pra Suzano juntos" },
  { src: photo5, alt: "Virada do ano", caption: "Nosso Halloween juntos" },
  { src: photo6, alt: "Filme no sofá", caption: "Amei essa saidinha com meus sogros" },
  { src: photo7, alt: "Dia de chuva", caption: "Uma das minhas fotos favoritas, nossa primeira viagem pra praia juntos, amor" },
  { src: photo8, alt: "Aniversário de namoro", caption: "Nosso primeiro evento de carros juntos, amor" },
  { src: photo9, alt: "Viagem inesperada", caption: "Minha primeira vez em Tietê, amor" },
  { src: photo10, alt: "Cozinhando juntos", caption: "Aniversário de 14 anos da minha princesa" },
  { src: photo11, alt: "Dançando", caption: "Nossa primeira vez no cinema, amor, pra assistir Noiva Cadáver" },
  { src: photo12, alt: "Passeio de bicicleta", caption: "Lembro até hoje de como fiquei queimado depois" },
  { src: photo13, alt: "Carta especial", caption: "Nosso primeiro Ano Novo juntos, amor" },
  { src: photo14, alt: "Carta especial", caption: "Nossa última viagem, minha viagem favorita" },
  { src: photo15, alt: "Carta especial", caption: "Minha primeira vez em uma pista de verdade, ver onde Ayrton Senna correu" },
  { src: photo16, alt: "Carta especial", caption: "Eu só amo muito essa foto" },
  { src: photo17, alt: "Carta especial", caption: "Simplesmente linda, minha namorada" },
  { src: photo18, alt: "Carta especial", caption: "Indo sozinhos pra casa da minha madrinha" },
  { src: photo19, alt: "Carta especial", caption: "De novo a linda da minha namorada" },
];

export const PhotoGallery = () => {
  const [index, setIndex] = useState(0);
  const total = photos.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const current = photos[index];

  return (
    <section className="py-24 px-6 bg-gradient-soft">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <p className="font-script text-3xl text-primary">nós ♡</p>
        </div>

        <div className="relative animate-fade-up">
          <div className="overflow-hidden rounded-3xl shadow-petal h-[500px]">
            <img
              key={index}
              src={current.src}
              alt={current.alt}
              loading="lazy"
              className="w-full h-full object-cover animate-fade-up"
            />
          </div>

          <button
            onClick={prev}
            aria-label="Foto anterior"
            className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-3 shadow-petal backdrop-blur-sm transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={next}
            aria-label="Próxima foto"
            className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-3 shadow-petal backdrop-blur-sm transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center mt-6 space-y-2">
          <p className="font-script text-2xl text-primary">{current.caption}</p>
          <p className="text-sm text-foreground/60">
            {index + 1} / {total}
          </p>
        </div>
      </div>
    </section>
  );
};