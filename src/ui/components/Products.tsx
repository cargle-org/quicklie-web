import React from "react";
import CustomButton from "../atoms/CustomButton";
import Image from "next/image";

const Products = () => {
  return (
    <div id={"products"} className='max-w-[1500px] mx-auto px-14 xs:px-6 text-center my-20'>
      <CustomButton className='py-8 font-bold'>Our Products</CustomButton>
      <div className='flex gap-4 mt-10 overflow-x-auto scroll-smooth snap-x snap-mandatory l:justify-center'>
        {/* Catalog Item 1 */}
        <div className='relative flex-shrink-0 w-72 snap-start'>
          <Image src='/images/Catalog1.png' alt='catalog' width={280} height={800} className='w-full' />
          <div className='text-center text-white absolute bottom-[7rem] left-1/2 transform -translate-x-1/2'>
            <p className='mb-3 font-medium text-[24px]'>Champagnes</p>
            <CustomButton padding='6px 40px' className='font-semibold hover:opacity-80'>
              View
            </CustomButton>
          </div>
        </div>

        {/* Catalog Item 2 */}
        <div className='relative flex-shrink-0 w-72 snap-start'>
          <Image src='/images/Catalog2.png' alt='catalog' width={280} height={800} className='w-full' />
          <div className='text-center text-white absolute bottom-[7rem] left-1/2 transform -translate-x-1/2'>
            <p className='mb-3 font-medium text-[24px]'>Whiskey</p>
            <CustomButton padding='6px 40px' className='font-semibold hover:opacity-80'>
              View
            </CustomButton>
          </div>
        </div>

        {/* Catalog Item 3 */}
        <div className='relative flex-shrink-0 w-72 snap-start'>
          <Image src='/images/Catalog3.png' alt='catalog' width={280} height={800} className='w-full' />
          <div className='text-center text-white absolute bottom-[7rem] left-1/2 transform -translate-x-1/2'>
            <p className='mb-3 font-medium text-[24px]'>Wines</p>
            <CustomButton padding='6px 40px' className='font-semibold hover:opacity-80'>
              View
            </CustomButton>
          </div>
        </div>

        {/* View All */}
        <div className='relative flex-shrink-0 w-72 snap-start bg-black'>
          <div className='text-center text-white absolute bottom-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2'>
            <CustomButton bgColor="transparent" padding='6px 40px' className='font-semibold hover:opacity-60 whitespace-nowrap'>
              View All
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
