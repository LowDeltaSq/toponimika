import Image from "next/image";
import { ReactNode, useState } from "react";

interface ModalProps {
  children: ReactNode;
  imageUrl: string;
  title: string;
  desc: string;
}

const ModalExample: React.FC<ModalProps> = ({
  children,
  imageUrl,
  title,
  desc,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsAnimating(true), 10); // Немного задержки для запуска анимации
  };

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => setIsModalOpen(false), 500); // Даем время для завершения анимации
  };

  return (
    <div>
      {/* Кнопка для открытия модального окна */}
      <button onClick={openModal}>{children}</button>

      {/* Модальное окно */}
      {isModalOpen && (
        <div
          className={`z-[1000] fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: 1000 }} // Дополнительно ставим вручную, если будут конфликты
        >
          <div
            className={`relative w-full h-full max-w-[80%] max-h-[80%] p-10 bg-[#27272F] rounded-3xl shadow-lg transition-transform duration-500 ${
              isAnimating ? "scale-100" : "scale-90"
            }`}
          >
            {/* Кнопка для закрытия модального окна */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            {/* Контент модального окна */}
            <div className="grid grid-cols-[1fr_2fr] h-full gap-10 w-full bg-[#27272F] text-white">
              <div className="">
                <Image
                  className="w-full h-full object-cover"
                  src={imageUrl}
                  width={10000}
                  height={10000}
                  alt=""
                />
              </div>
              <div className="block">
                <div className="text-6xl font-black pb-5 text-[#FEAB5F]">
                  {title}
                </div>
                <div className="text-xl">{desc}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalExample;
