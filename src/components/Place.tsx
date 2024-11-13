import React from "react";
import { FiMapPin } from "react-icons/fi";

const Place = ({ title, imageUrl }: { title: string; imageUrl: string }) => {
  return (
    <div
      className=" hover:scale-105 transition-all even:mt-14 flex justify-end rounded-3xl p-5 bg-cover h-80 w-72 z-10"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="z-0 rounded-2xl bg-white h-8 gap-1 px-4 items-center flex justify-center">
        <FiMapPin />
        <div className="font-medium">{title}</div>
      </div>
    </div>
  );
};

export default Place;
