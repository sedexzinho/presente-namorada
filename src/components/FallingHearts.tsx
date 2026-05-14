import { HeartIcon } from "./HeartIcon";

export const FallingHearts = () => {
  const hearts = Array.from({ length: 30 });
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {hearts.map((_, i) => {
        const left = (i * 7.3) % 100;
        const size = 12 + ((i * 3) % 5) * 6;
        const duration = 6 + (i % 6);
        const delay = (i % 10) * 0.8;
        const opacity = 0.4 + ((i % 5) * 0.1);
        return (
          <HeartIcon
            key={i}
            className="absolute text-primary animate-heart-fall"
            style={{
              left: `${left}%`,
              top: `-40px`,
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
};
