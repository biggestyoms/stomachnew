"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ImageOne from "../images/imageOne.jpeg";
import ImageTwo from "../images/ImageTwo.jpeg";

const Hero: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className=" w-full md:h-[90dvh] h-[110dvh] flex flex-col relative md:flex-row items-center justify-center ">
      <div className="md:w-1/2 w-full md:h-full h-[55dvh] flex items-center relative justify-center">
        <Image
          src={ImageOne}
          alt="Hero Image"
          objectFit="center"
          className="w-full h-full object-cover "
        />

        <div
          className={`bg-[#274535] w-full h-full absolute ${
            animate ? "swipe-up" : ""
          }`}
        ></div>
      </div>

      <div className="md:w-1/2 w-full  md:h-full h-[65dvh] flex-col items-center justify-center ">
        <div className="bg-[#dad9d3] w-full flex relative items-center text-center justify-center flex-col md:h-[64dvh] h-[45dvh] ">
          <p className="md:text-[16px] text-[15px] font-extralight">STOMACH CARE FOOD</p>
          <p className="md:text-[50px] text-[30px]">SATISFY YOUR STOMACH</p>
          <p className="md:text-[30px] text-[24px] font-extralight ">
            Discover the rich flavors of Africa with our curated selection of
            traditional recipes
          </p>
          <button className="bg-[#274535] text-[#d49a79] px-14 py-4 flex items-center justify-center mt-4 rounded-md">
            BOOK NOW
          </button>
          <div
            className={`bg-[#274535] w-full h-full absolute ${
              animate ? "swipe-right" : ""
            }`}
          ></div>
        </div>

        <div className="w-full md:h-[28dvh] h-[15dvh] flex items-center justify-center">
          <div className=" md:w-[70%] w-[98%] h-[9dvh] flex items-center gap-4 justify-center">
            <div className="w-[20%] h-full rounded-[95%] bg-white overflow-hidden">
              <Image
                src={ImageTwo}
                alt="Hero Image"
                objectFit="center"
                className="w-full h-full object-cover "
              />
            </div>

            <div className="flex flex-col items-start justify-center w-[70%] ">
              <p className="font-semibold text-[20px]">Make your own Request</p>
              <p className="text-[20px] font-extralight">We make it how you like</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
