import React from "react";
import Image from "next/image";
import image1 from "@/assets/imgs/landing/products/product1.png";
import image2 from "@/assets/imgs/landing/products/product2.png";
import image3 from "@/assets/imgs/landing/products/product3.png";

const OurProducts = () => {
  const products = [
    {
      image: image1,
      title: "Product 1",
    },
    {
      image: image2,
      title: "Product 2",
    },
    {
      image: image3,
      title: "Product 3",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 flex items-center justify-center">
          <span className="w-fit flex items-center cursor-pointer px-6 py-2 bg-brand-main text-white rounded-md">
            Our Products
          </span>
        </div>
        {products.map((product, index) => (
          <div
            key={index}
            className="relative col-span-6 md:col-span-4 lg:col-span-3 h-[600px] overflow-hidden rounded-lg group cursor-pointer lg:h-[831px]"
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 w-full p-4 pb-8 text-center bg-gradient-to-t from-black/50 to-transparent flex flex-col gap-4">
              <span className="text-white font-medium">{product.title}</span>
              <span className="w-fit mx-auto flex items-center cursor-pointer px-8 py-2 bg-brand-main text-white rounded-md">
                View
              </span>
            </div>
          </div>
        ))}
        <div className="group relative col-span-6 md:col-span-4 lg:col-span-3 h-[600px] overflow-hidden rounded-lg flex flex-col justify-center items-center cursor-pointer bg-brand-dark lg:h-[831px]">
          <div className="items-center text-xs font-semibold gap-2 cursor-pointer">
            <span className="text-brand-white text-2xl font-bold relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
              View All
            </span>
          </div>
        </div>
        <div className="col-span-12 flex items-center justify-center gap-2 text-xl font-medium">
          Can&apos;t find what you want?
          <div className="group items-center text-xs font-semibold gap-2 cursor-pointer">
            <span className="text-brand-main text-xl font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
              Contact Us
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProducts;
