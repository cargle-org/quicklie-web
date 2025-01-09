"use client";

// import Image from "next/image";
import React, { useRef, useState } from "react";
import logo from "@/assets/imgs/logo.png";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Sidebar from "../sidebar/page";
import { CgShoppingCart } from "react-icons/cg";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  return (
    <>
      <motion.div
        animate={isHidden ? "hidden" : "animate"}
        variants={{
          hidden: {
            y: "-100%",
          },
          visible: {
            y: "0%",
          },
        }}
        transition={{ duration: 0.2 }}
        className="z-50 bg-brand-white w-full h-[78px] flex items-center justify-center fixed top-0 left-0 shadow-lg"
      >
        <div className="relative px-2 flex items-center justify-between  mx-auto w-[97%] max-w-[1740px] lg:px-0 lg:w-[95%]">
          <div className="flex items-center gap-6 lg:hidden">
            <span
              className="cursor-pointer transition-fx hover:text-brand-main"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-left"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M6 16h10"
                />
              </svg>
            </span>
            <Sidebar
              setShowSidebar={setShowSidebar}
              showSidebar={showSidebar}
            />
          </div>
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Image src={logo} alt="Quicklie" width={220} height={22} />
          </Link>
          <div className="flex items-center gap-8 mr-4 lg:mr-0">
            <Link
              href="/contact"
              className="hidden items-center text-xs font-semibold gap-2 cursor-pointer lg:flex group"
            >
              <span className="hidden text-brand-dark text-sm font-semibold lg:block relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                Contact Us
              </span>
            </Link>
            <Link
              href="/faqs"
              className="flex items-center gap-2 cursor-pointer group"
            >
              <span className="hidden text-brand-dark text-sm font-semibold lg:block relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                FAQs
              </span>
            </Link>
            <div className="flex items-center gap-2 cursor-pointer group">
              <CgShoppingCart className="text-brand-dark text-2xl group-hover:text-brand-main lg:text-xl" />
              <span className="hidden text-brand-dark text-sm font-semibold lg:block relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                Shop Now
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
