"use client";

import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import Parallax from "../Paralax";
import classNames from "classnames";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="home" className={styles.wrap}>
      <div
        className={classNames(
          "z-40 fixed shadow-2xl flex text-xl my-5 items-center font-light border-2 border-white text-black bg-white transition-all duration-500",
          {
            "left-1/2 translate-x-[-50%] w-[40rem] h-[5rem] rounded-full gap-10 flex justify-center":
              !isScrolled,
            "left-10 top-4 w-[5rem] h-[5rem] rounded-full flex justify-center items-center":
              isScrolled,
            "w-[51rem] opacity-100": !isScrolled || isHovered,
            "w-[5rem] overflow-hidden opacity-100 gap-0":
              isScrolled && !isHovered,
          }
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={"#home"}>
          <div className="flex items-center justify-center">
            <Image
              src={"/aqmola.png"}
              width={80}
              height={80}
              alt="Aqmola"
              className="max-w-[80px] max-h-[80px]"
            />
          </div>
        </Link>
        <div
          className={classNames("flex gap-8 transition-all duration-500", {
            "w-[42rem] opacity-100": !isScrolled || isHovered,
            "w-[0] opacity-0": isScrolled && !isHovered,
          })}
        >
          <div className="hover:text-orange-400 transition-all">
            <Link href={"#oblys"}>
              <div className="relative inline-block group">
                <span className="text-black text-xl font-medium transition-all hover:text-[#FEAB5F]">
                  OBLYS
                </span>
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#FEAB5F] bg-[#FEAB5F] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </div>
            </Link>
          </div>
          <div>
            <Link href={"#jerler"}>
              <div className="relative inline-block group">
                <span className="text-black text-xl font-medium transition-all hover:text-[#FEAB5F]">
                  JERLER
                </span>
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#FEAB5F] bg-[#FEAB5F] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </div>
            </Link>
          </div>
          <div>
            <Link href={"#tarih"}>
              <div className="relative inline-block group">
                <span className="text-black text-xl font-medium transition-all hover:text-[#FEAB5F]">
                  TARIH
                </span>
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#FEAB5F] bg-[#FEAB5F] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </div>
            </Link>
          </div>
          <div>
            <Link href={"#video"}>
              <div className="relative inline-block group">
                <span className="uppercase text-black text-xl font-medium transition-all hover:text-[#FEAB5F]">
                  Beinerolik
                </span>
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#FEAB5F] bg-[#FEAB5F] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </div>
            </Link>
          </div>
          <div>
            <Link href={"#marshrut"}>
              <div className="relative inline-block group">
                <span className="text-black text-xl font-medium  transition-all hover:text-[#FEAB5F]">
                  MARSRUTTAR
                </span>
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#FEAB5F] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-screen grid items-center">
        <Parallax>
          <div
            className={`w-full flex font-black justify-center items-center text-9xl text-[#FEAB5F]`}
          >
            AQMOLA
          </div>
          <div
            className={`z-0 absolute font-medium uppercase px-5 py-1 bg-[#324555] text-[#FEAB5F] rounded-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[115%]`}
          >
            Qazaqstannyñ eñ ädemı jerı
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Header;
