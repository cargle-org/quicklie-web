"use client";

import React from "react";
import Image from "next/image";

// images
import bg from "@/assets/imgs/landing/hero.png";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-[500px] overflow-hidden rounded-lg lg:w-1/2">
        <Image src={bg} alt={"hero"} fill className="object-cover -z-10" />
        <div className="flex flex-col gap-8 p-8 h-full justify-center pl-16 lg:pl-16">
          <span className="text-brand-white text-4xl font-bold lg:text-5xl lg:w-2/3">
            Your Trusted Wholesale Drink Distributor
          </span>
          <span className="text-brand-white text-base font-bold lg:w-2/3">
            From spirits to wines, we stock it all. Quick, reliable, and
            convenient delivery, straight to you.{" "}
          </span>
          <span className="group transition-fx w-fit flex items-center cursor-pointer gap-2 px-6 py-2 bg-brand-main text-white rounded-md hover:bg-brand-main/70">
            Shop Product
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="transition-fx w-4 h-4 group-hover:rotate-45"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
