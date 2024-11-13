// components/Parallax.tsx
import React, { ReactNode, useEffect, useState } from "react";

interface ParallaxProps {
  children: ReactNode;
}

const Parallax: React.FC<ParallaxProps> = ({ children }) => {
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

  return (
    <div
      className=""
      style={{
        transform: `translateY(${scrollPosition * 0.2}px)`, // Измените значение для регулировки эффекта
      }}
    >
      <div className="">{children}</div>
    </div>
  );
};

export default Parallax;
