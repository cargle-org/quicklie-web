import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FAQsub from "./FAQsub";
import { faqData } from "../../constants/faqData"; 
import Link from "next/link";

const FAQs = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLoading(false);
    };
    fetchData();
  }, []);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <FAQSection className={"max-w-[1500px] mx-auto px-14 xs:px-6"}>
      <h2 className='faq-title font-bold text-black'>Frequently Asked Questions</h2>
      <div className="faq-categories">
        {faqData.map((category) => (
          <FAQCategory key={category.category}>
            <div 
              className="category-header"
              onClick={() => toggleCategory(category.category)}
            >
              <h3 className="text-xl font-semibold">{category.category}</h3>
              <svg
                className={`w-6 h-6 transition-transform ${
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
            </div>
            <div
              className="category-content"
              style={{
                maxHeight: openCategory === category.category ? "1000px" : "0",
              }}
            >
              {category.questions.map((faq, index) => (
                <FAQsub
                  key={index}
                  question={faq.question}
                  response={faq.answer}
                />
              ))}
            </div>
          </FAQCategory>
        ))}
      </div>
      
      <div className="text-center mt-12 mb-8">
        <p className="text-xl text-textDarker font-medium">Still have questions?</p>
        <Link 
          href="/contact" 
          className="inline-block mt-4 px-6 py-3 bg-[#110606] text-white rounded-md hover:opacity-90 transition-colors font-semibold"
        >
          Contact Us
        </Link>
      </div>
    </FAQSection>
  );
};

export default FAQs;

export const FAQSection = styled.div`
  background-color: #F7F7F7;
  padding: 5rem 4rem;
  
  .faq-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
  
  .faq-categories {
    max-width: 900px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 2rem;
    
    .faq-title {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
  
  @media (max-width: 520px) {
    padding: 3rem 1.5rem;
    
    .faq-title {
      font-size: 1.5rem;
    }
  }
`;

export const FAQCard = styled.div`
  background-color: white;
  border: none;
  border-radius: 30px;
  width: 70%;
  margin: 1rem auto;
  height: fit-content;
  padding: 2rem;
  box-shadow: 0 4px 4px #00000015;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const FAQLink = styled.div`
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  a {
    color: #ef4325;
    text-decoration: none;
    cursor: pointer;
    margin-left: 0.5rem;
    &:hover {
      color: #555555;
    }
  }

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
    font-size: 0.8rem;
    white-space: nowrap;
    a {
      margin-top: 0.5rem;
      margin-left: 0;
    }
  }
`;

export const FAQGroup = styled.div`
  margin: 1rem auto;
  .faqs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.5rem auto;
    .question {
      color: #222222;
      width: 75%;
    }
    img {
      cursor: pointer;
    }
  }
  .response {
    padding: 1.5rem 1rem 1.5rem 0;
    color: #555555;
    font-size: 0.8rem;
  }
  hr {
    border: 0.5px solid #dddddd;
  }

  @media (max-width: 768px) {
    .faqs {
      .question {
        font-size: 0.8rem;
      }
    }
    .response {
      font-size: 0.7rem;
    }
  }
`;

export const FAQCategory = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 4px #00000015;
  margin-bottom: 1rem;
  
  .category-header {
    background-color: #110606;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px 8px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .category-content {
    overflow: hidden;
    transition: all 0.3s ease;
  }
`;
