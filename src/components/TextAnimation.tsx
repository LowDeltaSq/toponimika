"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { motion } from "framer-motion";

interface TextAnimationProps {
  children: ReactNode;
  view?: number | 0.3;
}

const TextAnimation: React.FC<TextAnimationProps> = ({ children, view }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // Скрываем, если элемент выходит из видимости
          }
        });
      },
      {
        threshold: view, // Триггер на 30% видимости
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div>
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, translateY: 70 }} // Начальная позиция
        animate={isVisible ? { opacity: 1, translateY: 0 } : {}} // Анимация при появлении
        transition={{ duration: 0.85 }} // Плавная анимацияs
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TextAnimation;
