"use client";

import React, { useState } from "react";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What products do you distribute?",
      answer:
        "We distribute a wide range of beverages including premium spirits, wines, and other drinks for wholesale purposes.",
    },
    {
      question: "How do I place an order?",
      answer:
        "You can place orders through our online platform by browsing our product catalog and adding items to your cart. Once registered, you can complete the checkout process.",
    },
    {
      question: "What are your delivery areas?",
      answer:
        "We currently service various regions. Please contact our customer service team to confirm if we deliver to your specific location.",
    },
    {
      question: "What are your minimum order quantities?",
      answer:
        "Minimum order quantities vary by product. Please check individual product listings or contact our sales team for specific details.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery times typically range from 2-5 business days depending on your location and order size. Specific delivery timeframes will be provided during checkout.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Have a question, check FAQs
      </h1>
      <div className="max-w-3xl mx-auto px-4 bg-brand-white rounded-lg p-8 shadow-xl border border-gray-200">
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <span
                  className={`${
                    openIndex === index ? "font-bold" : "font-medium"
                  }`}
                >
                  {faq.question}
                </span>
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center group hover:bg-brand-main hover:text-white transition-colors">
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`px-6 py-4 bg-gray-50 transition-all duration-300 ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-12 flex items-center justify-center gap-2 text-xl font-medium mt-8">
        Can&apos;t find what you want?
        <div className="group items-center text-xs font-semibold gap-2 cursor-pointer">
          <span className="text-brand-main text-xl font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
            Contact Us
          </span>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
