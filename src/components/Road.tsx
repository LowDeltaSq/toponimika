import React from "react";
import { Map } from "./Map";
import TextAnimation from "./TextAnimation";

const Road = () => {
  return (
    <div id="marshrut" className="px-46 ">
      <div className="text-6xl font-bold justify-center flex items-end text-[#FEAB5F] mt-20">
        <TextAnimation>Marshruttar</TextAnimation>
      </div>
      <div className="w-full flex justify-center pt-20">
        <div className="w-[80%] rounded-t-3xl overflow-hidden h-[50%]">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Road;
