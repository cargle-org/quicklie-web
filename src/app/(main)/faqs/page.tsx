"use client";

import React, { useState } from "react";

const Faqs = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestions, setOpenQuestions] = useState<{ [key: string]: number | null }>({});

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What does your company do?",
          answer:
            "Quicklie Distribution is a wholesale distributor specializing in spirits, wines, and other beverages. We provide quick, reliable delivery to businesses, ensuring their shelves stay stocked with high-quality products.",
        },
        {
          question: "Where do you deliver?",
          answer:
            "We deliver to businesses across Nigeria, ensuring a seamless supply chain for our clients.",
        },
        {
          question: "Who can place an order?",
          answer:
            "Our services are tailored for licensed businesses, including bars, restaurants, liquor stores, and event planners.",
        },
      ],
    },
    {
      category: "Ordering",
      questions: [
        {
          question: "How do I place an order?",
          answer:
            "You can place an order through our website, by calling us at 09045665727, or by emailing us at sales@quickliedistributions.com.",
        },
        {
          question: "What's the order deadline?",
          answer:
            "There is no order deadline. Orders must be placed by 12:00hr to ensure next-day delivery.",
        },
        {
          question: "Can I modify or cancel my order?",
          answer:
            "Yes, you can modify or cancel your order if you contact us at least 6 hours before the scheduled delivery time.",
        },
      ],
    },
    {
      category: "Products",
      questions: [
        {
          question: "Do you carry seasonal or limited items?",
          answer:
            "Yes, we stock a variety of seasonal and limited-edition beverages. Contact us to learn more about availability.",
        },
        {
          question: "Can I request product samples?",
          answer:
            "Absolutely! For select products, we offer samples to help you decide what's best for your business.",
        },
      ],
    },
    {
      category: "Delivery",
      questions: [
        {
          question: "Are there delivery fees?",
          answer:
            "Delivery is free for orders above N30,000,000. For smaller orders, a nominal fee applies.",
        },
        {
          question: "What if there's an issue with my delivery?",
          answer:
            "Contact our customer support team immediately at 09045665727, and we'll resolve the issue promptly.",
        },
      ],
    },
    {
      category: "Licensing",
      questions: [
        {
          question: "What licenses are required to order?",
          answer:
            "To place an order, you must have a valid business or liquor license, depending on local regulations.",
        },
        {
          question: "Do you verify licenses?",
          answer:
            "Yes, we verify all licenses during the account setup process to comply with legal requirements.",
        },
      ],
    },
    {
      category: "Payments",
      questions: [
        {
          question: "What payment methods are accepted?",
          answer:
            "We accept bank transfers, credit/debit cards, and mobile payments.",
        },
        {
          question: "Can I apply for credit terms?",
          answer:
            "Yes, eligible businesses can apply for credit terms. Contact us for more details on the application process.",
        },
      ],
    },
    {
      category: "Support",
      questions: [
        {
          question: "How do I contact customer service?",
          answer:
            "You can reach our customer support team by calling 09045665727 or emailing cs@quickliedistributions.com.",
        },
        {
          question: "Do you offer product education or training?",
          answer:
            "Yes, we provide training and product education to help businesses make informed decisions about their inventory.",
        },
      ],
    },
  ];
  

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const toggleQuestion = (category: string, index: number) => {
    setOpenQuestions(prev => ({
      ...prev,
      [category]: prev[category] === index ? null : index
    }));
  };

  return (
    <div className="w-full min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-brand-dark">
          Frequently Asked Questions
        </h1>
      
        <div className="space-y-6">
          {faqs.map((category) => (
            <div key={category.category} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full px-6 py-4 text-left bg-brand-dark text-white rounded-t-lg hover:bg-brand-dark/90 flex justify-between items-center"
                onClick={() => toggleCategory(category.category)}
              >
                <span className="text-xl font-semibold">{category.category}</span>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openCategory === category.category ? "rotate-180" : ""
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
              </button>
              
              <div
                className={`transition-all duration-300 ${
                  openCategory === category.category ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                {category.questions.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-none">
                    <button
                      className="w-full px-6 py-4 text-left hover:bg-gray-50 flex justify-between items-center"
                      onClick={() => toggleQuestion(category.category, index)}
                    >
                      <span className={`text-brand-dark ${
                        openQuestions[category.category] === index ? "font-bold" : ""
                      }`}>
                        {faq.question}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                          openQuestions[category.category] === index ? "rotate-180" : ""
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
                    </button>
                    <div
                      className={`transition-all duration-300 ${
                        openQuestions[category.category] === index 
                          ? "max-h-[500px] opacity-100" 
                          : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      <p className="px-6 py-4 text-gray-600 bg-gray-50">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-brand-dark">Still have questions?</p>
          <a 
            href="/contact" 
            className="inline-block mt-4 px-6 py-3 bg-brand-dark text-white rounded-md hover:bg-brand-dark/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
