"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../images/logo.png";
import { Sling as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [animateLinks, setAnimateLinks] = useState<boolean>(false);


  const handleMenuOpen = () => {
    setMenuOpen(prev => !prev);
    if (!menuOpen) {
   
      setTimeout(() => setAnimateLinks(true), 500); 
      setAnimateLinks(false);
    }
  };

  useEffect(() => {
    // Add or remove the class to disable scrolling on body
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up the effect on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);
  
  return (
    <>
      <div
        className={`absolute w-full h-[87dvh] bottom-0 bg-[#dcd8d3] flex md:hidden z-20 text-[#274535] items-center justify-center flex-col gap-5 ${
          menuOpen ? "" : "ml-[-1000px]"
        } transition-transform duration-1000`}
      >
        <div
          className={`w-[90%] h-full items-start  justify-center flex flex-col ${
            animateLinks ? "" : "opacity-0"
          } transition-opacity duration-500`}
        >
          <Link href="/about">
            <p className="text-[55px] ">About</p>
          </Link>

          <Link href="/menu">
            <p className="text-[55px] ">Menu</p>
          </Link>

          <Link href="/gallery">
            <p className="text-[55px] ">Gallery</p>
          </Link>

          <Link href="/contact">
            <p
              className="text-[55px] slide-in-left"
              style={{ animationDelay: "0s" }}
            >
              Contact
            </p>
          </Link>
        </div>
      </div>

      <div className="w-full h-full flex-center bg-[#d49a79]  ">
        <div className="md:w-[65%] w-[98%] h-[13dvh] flex-between   ">
          <div className="w-[35%] h-full hidden md:flex items-center justify-center gap-6 ">
            <Link href="/about">
              <p className="text-[22px]">About</p>
            </Link>

            <Link href="/menu">
              <p className="text-[22px]">Menu</p>
            </Link>
          </div>

          <Link
            href="/"
            className="md:w-[16%] w-[20%] relative  border-2 border-[#d49a79] h-full"
          >
            <Image
              src={Logo}
              alt="logo"
              objectFit="center"
              className="absolute w-full  h-full "
            />
          </Link>

          <div className="w-[35%] h-full md:flex items-center justify-center hidden gap-6">
            <Link href="/gallery">
              <p className="text-[22px]">Gallery</p>
            </Link>

            <Link href="/contact">
              <p className="text-[22px]">Contact</p>
            </Link>
          </div>

          <div
            className="w-[15%] flex items-center justify-center z-30 md:hidden"
            onClick={handleMenuOpen}
          >
            <Hamburger direction="right" distance="lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
