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

const photos = [
  { src: photo2, alt: "Nosso primeiro café", caption: "O começo de tudo, nossa primeiro encontro" },
  { src: photo3, alt: "Pés na areia", caption: "Nosso primeiro natal juntos" },
  { src: photo4, alt: "Piquenique", caption: "Indo pra Suzano juntos" },
  { src: photo5, alt: "Virada do ano", caption: "Nosso hallowen juntos" },
  { src: photo6, alt: "Filme no sofá", caption: "Amei essa saidinha com meus sogros" },
  { src: photo7, alt: "Dia de chuva", caption: "Uma das minhas fotos favoritas, nossa primeira viagem para praia juntos amor" },
  { src: photo8, alt: "Aniversário de namoro", caption: "Nosso primeiro evento de carros juntos amor" },
  { src: photo9, alt: "Viagem inesperada", caption: "Minha primeira vez em Tiete amor" },
  { src: photo10, alt: "Cozinhando juntos", caption: "ANIVERSARIO DE 14 ANOS DA MINHA PRINCESA" },
  { src: photo11, alt: "Dançando", caption: "Nossa primeira vez no cinema amor, pra assistir Noiva Cadáver" },
  { src: photo12, alt: "Passeio de bicicleta", caption: "Lembro até hoje de como fiquei queimado depois" },
  { src: photo13, alt: "Carta especial", caption: "NOSSO PRIMEIRO ANO NOVO JUNTOS AMOR" },
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
          <div className="overflow-hidden rounded-3xl shadow-petal">
            <img
              key={index}
              src={current.src}
              alt={current.alt}
              loading="lazy"
              className="w-full h-auto object-cover animate-fade-up"
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
