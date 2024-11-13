// components/Parallax.tsx
import React, { ReactNode, useEffect, useState } from "react";

interface ParallaxProps {
  children: ReactNode;
  triggerHeight: number; // Высота прокрутки для активации эффекта
  side: "right" | "left";
}

const ParallaxX: React.FC<ParallaxProps> = ({
  children,
  triggerHeight,
  side,
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isParallaxActive = scrollPosition >= triggerHeight;

  return (
    <div className="relative h-screen bg-cover bg-center parallax">
      <div className="absolute inset-0opacity-50"></div>
      <div
        className={`relative z-0 flex items-center justify-center h-full transition-transform duration-700 ${
          isParallaxActive ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform:
            side === "left"
              ? isParallaxActive
                ? `translateX(0)`
                : `translateX(-100%)`
              : isParallaxActive
              ? `translateX(0)`
              : `translateX(100%)`, // Текст выезжает с правой стороны
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxX;
