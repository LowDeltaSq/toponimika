import Aqmola from "@/components/Aqmola";
import Gallery from "@/components/Gallery";
import Modal from "@/components/Modal";
import Places from "@/components/Places";
import Road from "@/components/Road";
import Taruh from "@/components/Taruh";
import Video from "@/components/Video";
import React from "react";

const Home = () => {
  return (
    <div className="h-full">
      <Aqmola />
      <Places />
      <Taruh />
      <Video />
      <Road />
    </div>
  );
};

export default Home;
