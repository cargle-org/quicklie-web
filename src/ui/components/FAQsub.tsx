import React, { useState } from "react";
import ArrowUp from "../atoms/svg/ArrowUp";
import ArrowDown from "../atoms/svg/ArrowDownIcon";
import { FAQGroup } from "./FAQs";

interface FaqGroupProps {
  question: string;
  response: string;
}

function FAQsub(props: FaqGroupProps) {
  const [openFaq, setOpenFaq] = useState<boolean>(false);

  const handleClick = () => {
    setOpenFaq(!openFaq);
  };

  return (
    <FAQGroup>
      <div className='faqs p-4'>
        <p className='question'>{props.question}</p>
        <button 
          onClick={handleClick}
          className='focus:outline-none'
        >
          {openFaq ? <ArrowUp /> : <ArrowDown />}
        </button>
      </div>
      {openFaq && (
        <p className='response !p-3'>{props.response}</p>
      )}
      <hr className='border-[#dddddd]' />
    </FAQGroup>
  );
}

export default FAQsub;
