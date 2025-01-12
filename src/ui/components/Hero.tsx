import React from "react";
import CustomButton from "../atoms/CustomButton";

const Hero: React.FC = () => {
  return (
    <div className={`w-full h-[680px] bg-hero bg-cover bg-center flex items-center text-white`}>
      <div className='w-full px-20 xs:px-6 max-w-[1400px] mx-auto'>
        <h1 className='text-[52px] font-black max-w-[500px]'>Your Trusted Wholesale Drink Distributor</h1>
        <p className='max-w-[350px] mt-6 mb-8'>
          From spirits to wines, we stock it all. Quick, reliable, and convenient delivery, straight to you.
        </p>
        <CustomButton padding='10px 45px' className='font-semibold'>
          Shop Now
        </CustomButton>
      </div>
    </div>
  );
};

export default Hero;
