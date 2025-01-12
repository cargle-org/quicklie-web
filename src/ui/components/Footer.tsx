import React, { useState } from "react";
import CustomButton from "../atoms/CustomButton";

const Footer = () => {
  const [values, setValues] = useState({ email: "", message: "" });

  return (
    <div className='w-full'>
      <div className='flex justify-center items-center my-8 font-semibold xs:px-6'>
        <p>Can&apos;t find your want?</p>
        <span className='text-textOrange pl-2 '>Contact us</span>
      </div>
      <div className='bg-[#110606]'>
        <div className='py-20 max-w-[1500px] mx-auto flex xlg:flex-wrap sm:gap-10 gap-6 justify-between items-start px-14 xs:px-6 text-white min-h-[500px]'>
          <div className='w-1/3 sm:w-full'>
            <h2 className='font-bold'>ABOUT</h2>
            <div className='w-7 h-1 bg-red'></div>
            <p className='mt-6 w-[80%] text-justify text-sm sm:w-full'>
              Quicklie Distribution is your one-stop solution for all wholesale beverage needs. We pride ourselves on
              providing a seamless supply chain, offering premium spirits, wines, and other beverages with unmatched
              efficiency. Trust us to stock your shelves and keep your business running smoothly
            </p>
          </div>
          <div className='w-1/3 sm:w-full'>
            <h2 className='font-bold'>QUICK LINKS</h2>
            <div className='w-7 h-1 bg-red'></div>
            <ul className='mt-6 text-sm'>
              <li> Home </li>
              <li> About </li>
              <li> Our Products </li>
              <li> Contact </li>
              <li> Shop Now </li>
            </ul>
          </div>
          <div className='w-1/3 sm:w-full'>
            <h2 className='font-bold'>CONTACT</h2>
            <div className='w-7 h-1 bg-red'></div>

            <form className='mt-6'>
              <p className='text-sm'>Send us a message</p>
              <input
                className='w-full my-4 py-2 px-4 rounded-md text-textBlack'
                type='email'
                placeholder='Enter your email address...'
                name={"email"}
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
              />
              <textarea
                className='w-full mb-4 py-2 px-4 rounded-md text-textBlack'
                name='message'
                id='message'
                rows={6}
                placeholder='Enter your email address...'
                value={values.message}
                onChange={(e) => setValues({ ...values, message: e.target.value })}></textarea>
              <CustomButton className='font-semibold'>Send Message</CustomButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
