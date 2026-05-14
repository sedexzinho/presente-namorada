// src/components/StarsBackground.tsx
import React from "react";
import "./StarsBackground.css"; // ← certifique-se de que o caminho está correto

const StarsBackground: React.FC = () => {
  const starCount = 120; // ajuste a quantidade conforme desejar
  const stars = Array.from({ length: starCount });

  return (
    <div className="stars-background">
      {stars.map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * -100}vh`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            animationDuration: `${Math.random() * 2 + 2}s`,
            animationDelay: `${Math.random() * 4}s`,
            opacity: `${Math.random() * 0.6 + 0.2}`,
            // Escolha uma cor que contraste com o fundo da sua página
            background: "#fff", // ou "#ffeb3b", "rgba(255,255,255,0.7)", etc.
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;