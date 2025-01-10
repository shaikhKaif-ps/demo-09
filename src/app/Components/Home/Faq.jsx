'use client';

import { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Next.js?',
      answer:
        'Next.js is a React framework for building server-side rendered and static web applications.',
    },
    {
      question: 'What is Tailwind CSS?',
      answer:
        'Tailwind CSS is a utility-first CSS framework for building custom designs without leaving your HTML.',
    },
    {
      question: 'How does this accordion work?',
      answer:
        'Click on the question to toggle the visibility of the answer with a smooth transition.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="ourContainer mx-auto py-20">

      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 ">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-4  transition"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <svg
                className={`w-6 h-6 transition-transform duration-500 ${
                  activeIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
                xmlns="http://www.w3.org/2000/svg"
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

            {/* Accordion Content */}
            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-[500px]' : 'max-h-0'
              }`}
            >
              <div className="p-4 text-gray-700">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Faq;
