import React from "react";
import TextAnimation from "./TextAnimation";

const Video = () => {
  return (
    <div id="video" className="h-screen">
      <div className="z-30 pt-10 text-6xl font-bold justify-center flex items-end text-[#FEAB5F]">
        <TextAnimation>Aqmola zialylary turaly beinerolik</TextAnimation>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="w-[840px] h-[460px]"
            src={`https://www.youtube.com/embed/EzJzcOaaPtc?si=KAkricyD6AWJV2sn`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
