import { useState } from "react";
import { Music, X, SkipForward, SkipBack } from "lucide-react";

const TRACKS = [
  { title: "Um Amor Puro – Djavan", type: "soundcloud", url: "https://soundcloud.com/arthur-ferreira-827512497/djavan-um-amor-puro" },
  {title: "Oceano", type: "soundcloud", url : "https://soundcloud.com/sus-479508025/djavan-oceano"},
  { title: "Thriller", type: "youtube", url: "vAN-Ajsh1zA" },
  { title: "Billie Jean", type: "youtube", url: "QRidtXn0u7k" },
  {title: "Heaven Can Wait", type: "soundcloud", url : "https://soundcloud.com/user-408272094/heaven-can-wait"},
  { title: "Sofa Breja e Netflix", type: "youtube", url: "8toOJb8xhB8" },
  { title: "Vagalumes – Pollo", type: "soundcloud", url: "https://soundcloud.com/pollooficial/vagalumes" },
  { title: "Melo de amor", type: "youtube", url: "gBbNRmYknbQ"},


];

export const MusicPlayer = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + TRACKS.length) % TRACKS.length);
  const next = () => setCurrent((i) => (i + 1) % TRACKS.length);

  const track = TRACKS[current];
  const src =
    track.type === "soundcloud"
      ? `https://w.soundcloud.com/player/?url=${track.url}&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false`
      : `https://www.youtube.com/embed/${track.url}?autoplay=1`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`bg-card/95 backdrop-blur-md border border-border rounded-2xl shadow-petal p-3 w-72 animate-fade-up mb-3 ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-script text-primary text-lg">
            Trilha Sonora ♡
          </span>
          <button
            onClick={() => setOpen(false)}
            className="text-muted-foreground hover:text-primary"
            aria-label="Fechar player"
          >
            <X size={16} />
          </button>
        </div>

        <iframe
          key={current}
          width="100%"
          height="80"
          src={src}
          title={track.title}
          allow="autoplay; encrypted-media"
          className="rounded-lg"
        />

        <p className="text-xs text-center text-muted-foreground mt-2 truncate">
          {track.title}
        </p>

        <div className="flex justify-center gap-4 mt-2">
          <button onClick={prev} className="text-primary hover:scale-110 transition-transform">
            <SkipBack size={18} />
          </button>
          <button onClick={next} className="text-primary hover:scale-110 transition-transform">
            <SkipForward size={18} />
          </button>
        </div>
      </div>

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-gradient-gold text-primary-foreground p-4 rounded-full shadow-petal hover:scale-110 transition-transform animate-shimmer"
          aria-label="Tocar trilha sonora"
        >
          <Music size={22} />
        </button>
      )}
    </div>
  );
};