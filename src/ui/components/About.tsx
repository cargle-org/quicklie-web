import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className='flex items-center justify-between md:h-[600px] gap-10 max-w-[1500px] mx-auto px-14 xs:px-6 sm:flex-col-reverse sm:space-y-10'>
      <div className='w-1/2 flex justify-center items-center h-full sm:w-full sm:my-8'>
        <Image src='/images/AboutLeft.png' alt='about' width={480} height={360} />
      </div>
      <div className='w-1/2 mx-auto sm:w-full '>
        <h3 className='text-[2.5rem] font-semibold mb-4 text-textBlack xs:text-[2rem] sm:mt-[3rem]'>
          What is Quicklie?
        </h3>
        <p className='md:w-[90%] l:w-[60%] text-sm font-medium text-textDark sm:w-full text-justify sm:mb-[3rem]'>
          Quicklie Distribution is your one-stop solution for all wholesale beverage needs. We pride ourselves on
          providing a seamless supply chain, offering premium spirits, wines, and other beverages with unmatched
          efficiency. Trust us to stock your shelves and keep your business running smoothly.
        </p>
      </div>
    </div>
  );
};

export default About;
