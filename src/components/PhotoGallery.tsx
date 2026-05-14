import photo1 from "@/assets/hero-couple.jpg";
import photo2 from "@/assets/moment-1.jpg";
import photo3 from "@/assets/moment-2.jpg";
import photo4 from "@/assets/moment-3.jpg";

const photos = [
  { src: photo1, alt: "Nós dois" },
  { src: photo2, alt: "Um momento nosso" },
  { src: photo3, alt: "Outro momento nosso" },
  { src: photo4, alt: "Mais um momento nosso" },
];

export const PhotoGallery = () => (
  <section className="py-24 px-6 bg-gradient-soft">
    <div className="max-w-2xl mx-auto space-y-12">
      <div className="text-center mb-12 animate-fade-up">
        <p className="font-script text-3xl text-primary">nós ♡</p>
      </div>
      {photos.map((p, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-3xl shadow-petal animate-fade-up"
        >
          <img
            src={p.src}
            alt={p.alt}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  </section>
);
