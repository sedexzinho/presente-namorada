import { HeartIcon } from "./HeartIcon";

export const FloatingPetals = () => {
  const petals = Array.from({ length: 12 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {petals.map((_, i) => (
        <HeartIcon
          key={i}
          className="absolute text-primary-glow/40 animate-float"
          style={{
            left: `${(i * 8.3) % 100}%`,
            top: `${(i * 13) % 100}%`,
            width: `${12 + (i % 4) * 6}px`,
            height: `${12 + (i % 4) * 6}px`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${5 + (i % 5)}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};
