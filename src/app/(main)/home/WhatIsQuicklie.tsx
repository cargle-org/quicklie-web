import React from "react";
import Image from "next/image";

// images
import whatis from "@/assets/imgs/landing/whatis.png";

const WhatIsQuicklie = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-12">
        <div className="col-span-2 row-span-1 lg:col-span-1 lg:row-span-2 rounded-lg relative p-4">
          <Image
            src={whatis}
            alt={"whatis"}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="hidden col-span-2 lg:block lg:col-span-1"></div>
        <div className="col-span-2 w-[95%] mx-auto flex flex-col gap-6 items-start justify-center lg:col-span-1 lg:w-full">
          <span className="text-brand-dark text-3xl font-bold">
            What is Quicklie?
          </span>
          <span className="text-brand-dark/70 text-base font-bold lg:text-2xl">
            Quicklie Distribution is your one-stop solution for all wholesale
            beverage needs. We pride ourselves on providing a seamless supply
            chain, offering premium spirits, wines, and other beverages with
            unmatched efficiency. Trust us to stock your shelves and keep your
            business running smoothly.
          </span>
        </div>
      </div>
    </>
  );
};

export default WhatIsQuicklie;
