import { FloatingPetals } from "./FloatingPetals";
import { HeartIcon } from "./HeartIcon";

export const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-romance">
    <FloatingPetals />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background" />
    <div className="relative z-10 text-center px-6 animate-fade-up">
      <div className="flex justify-center mb-8">
        <HeartIcon className="w-12 h-12 text-primary animate-shimmer" />
      </div>
      <p className="font-script text-3xl md:text-4xl text-primary mb-6">Feliz aniversário</p>
      <h1 className="text-5xl md:text-7xl lg:text-8xl text-gradient-gold italic leading-tight">
        Eu <span className="not-italic">+</span> Você
      </h1>
      <p className="font-script text-4xl md:text-6xl text-primary mt-6">
        e seus 15 anos ♡
      </p>
      <div className="mt-16 flex justify-center">
        <div className="w-px h-20 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </div>
  </section>
);
