import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import routes from "@/constants/routes";
import { ImMenu3 } from "react-icons/im";
import Link from "next/link";

const Header: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-white py-2'>
      <div className='w-full flex justify-between items-center py-4 pr-12 pl-6 xs:pr-6 xs:pl-0 text-textDark max-w-[1500px] mx-auto '>
        <Image
          src='/images/logo.png'
          alt='Logo'
          width={200}
          height={100}
          onClick={() => router.push("/")}
          className='cursor-pointer'
        />

        <ul className='hidden md:flex justify-center items-center space-x-4'>
          {routes.map((route) => {
            const isActive = router.pathname === route.route;

            return (
              <Link
                href={route.route}
                key={route.route}
                className={`cursor-pointer relative ${isActive ? "font-bold text-red" : ""}`}>
                {route.name}
              </Link>
            );
          })}
          <Link href='/contact' className='sm:hidden block font-semibold text-sm text-red pl-[70px]'>
            Shop Now
          </Link>
        </ul>

        <div className='relative md:hidden'>
          <ImMenu3 className='md:hidden cursor-pointer' size={25} onClick={toggleMenu} />

          {isMenuOpen && (
            <div className='md:hidden absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md'>
              <ul className='flex flex-col py-2 px-2'>
                {routes.map((route) => {
                  const isActive = router.pathname === route.route;
                  return (
                    <li
                      key={route.route}
                      className={`p-2 cursor-pointer text-sm mx-auto ${
                        isActive ? "font-bold text-red" : "text-textDarker"
                      }`}>
                      {route.name}
                    </li>
                  );
                })}
                <Link href='/contact' className='p-2 cursor-pointer text-textDarker text-sm text-center w-full'>
                  Shop Now
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
