"use client";
import React, { useState } from "react";

const FAQList = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-wraper">
      {faqs?.map((faq, index) => (
        <div key={index} className="faq-item">
          <button
            className="faq-question"
            onClick={() => toggleQuestion(index)}
          >
            {faq.question}
          </button>
          {openIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQList;
