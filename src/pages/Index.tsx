import { Hero } from "@/components/Hero";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Timeline } from "@/components/Timeline";
import { Letters } from "@/components/Letters";
import { TimeCounter } from "@/components/TimeCounter";
import { BirthdayMessage } from "@/components/BirthdayMessage";
import { Footer } from "@/components/Footer";
import { MusicPlayer } from "@/components/MusicPlayer";
import { FallingHearts } from "@/components/FallingHearts";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Eu + Você e seus 15 anos ♡";
    const desc = "Um presente de aniversário feito com carinho — fotos, palavras e uma trilha sonora especial.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <FallingHearts />
      <Hero />
      <TimeCounter />
      <PhotoGallery />
      <Timeline />
      <Letters />
      <BirthdayMessage />
      <Footer />
      <MusicPlayer />
    </main>
  );
};

export default Index;
