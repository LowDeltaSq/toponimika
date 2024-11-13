"use client";

import Image from "next/image";
import React from "react";
import TextAnimation from "./TextAnimation";

const Main = () => {
  return (
    <div
      id="aqmola"
      className="relative justify-between px-24 h-screen rounded-b-[3rem] bg-[#27272F] text-white grid grid-cols-[1fr_1fr]"
    >
      <div className=""></div>

      <div className="-left-[20rem] absolute top-1/2 translate-y-[-50%]">
        <Image src={"/astana.png"} width={1000} height={1000} alt="astana" />
      </div>

      <div className="pt-20">
        <TextAnimation view={0.6}>
          <div className="">
            <div className="text-6xl font-black text-[#FEAB5F]">Aqmola</div>
            <div className="text-xl font-thin pt-5">
              Aqmola oblysy – Qazaqstannyñ ortalyq bölıgınde ornalasqan aimaq,
              tabiğat sūlulyğy men bai mädenietımen tanymal. Būl jerde Burabai
              ūlttyq parkı ornalasqan, ol köktı kölderı men qarağai ormandarymen
              belgılı. Oblys köptegen tarihi nysandarğa toly, sondai-aq
              jergılıktı halyqtyñ bai dästürlerı men ūlttyq ashanasy da
              sūlulyqqa toly. Nauryz siaqty ūlttyq merekeler keñınen atalyp
              ötedı, köne qazaq dästürlerı saqtalğan. Aqmola oblysy – tabiğat
              pen mädeniettı bır arnağa toğystyrğan keremet jer, turister üşın
              körıktı saiahat bağyttarymen tanymal.
            </div>
          </div>
        </TextAnimation>
      </div>
    </div>
  );
};

export default Main;
