"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
  isOpen?: boolean;
};

const FAQSection = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: "How do I book an airport pickup?",
      answer:
        "Simply enter your flight details, choose a vehicle, and confirm your booking.",
      isOpen: true,
    },
    {
      question: "What happens if my flight is delayed or arrives early?",
      answer:
        "We track your flight in real-time to adjust for any delays or early arrivals - your driver will be there when you land.",
      isOpen: false,
    },
    {
      question: "Where will I meet my driver at the airport?",
      answer:
        "Your driver will wait at the designated pickup location, with clear identification provided in your booking details.",
      isOpen: false,
    },
    {
      question: "Can I cancel or modify my booking?",
      answer:
        "Yes, you can cancel or modify your booking for free up to 24 hours before your scheduled pickup time.",
      isOpen: false,
    },
    {
      question: "What types of vehicles are available for rent?",
      answer:
        "We offer a range of vehicles including economy cars, SUVs, luxury sedans, and vans to accommodate different group sizes and preferences.",
      isOpen: false,
    },
    {
      question: "Is there a minimum rental period?",
      answer:
        "Yes, our standard minimum rental period is 24 hours. However, we also offer special hourly rates for airport pickups and short-term needs.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen };
        }
        return faq;
      })
    );
  };

  return (
    <section  data-aos="slide-right" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-poppins font-[700] text-[#032A32] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#5D6465] text-[18px]">
            Find quick answers to common questions about our car services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full py-4 text-left font-medium text-[#1D1F1F] hover:text-teal-700 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-[20px] font-[700]">{faq.question}</span>
                <span>
                  {faq.isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              {faq.isOpen && (
                <div className="mt-2 text-[#1D1F1F] text-[18px] font-[300] pb-4">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
