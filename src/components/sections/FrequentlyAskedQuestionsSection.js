import React, { useState } from "react";

export const FrequentlyAskedQuestionsSection = () => {
  const [expandedItems, setExpandedItems] = useState([0]);

  const faqData = [
    {
      id: 0,
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
      isExpanded: true
    },
    {
      id: 1,
      question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer: "",
      isExpanded: false
    },
    {
      id: 2,
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer: "",
      isExpanded: false
    }
  ];

  const toggleExpanded = (id) => {
    setExpandedItems(prev =>
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="container mx-auto py-16" aria-labelledby="faq-heading">
      <div className="flex flex-col items-center gap-7 px-4">
        <h2 
          id="faq-heading"
          className="font-semibold text-2xl md:text-3xl text-indigo-600 text-center"
        >
          Frequently asked questions
        </h2>
        
        <div className="flex flex-col items-start gap-4 w-full max-w-[846px]">
          {faqData.map((faq) => (
            <article 
              key={faq.id}
              className="flex flex-col w-full items-start gap-3 p-6 bg-[#faf7ff] rounded-lg shadow-sm"
            >
              <header className="flex items-center justify-between w-full gap-4">
                <h3 
                  id={`faq-question-${faq.id}`}
                  className={`font-medium text-lg md:text-xl ${expandedItems.includes(faq.id) ? 'text-indigo-600' : 'text-black'}`}
                >
                  {faq.question}
                </h3>
                
                <button
                  className="flex items-center justify-center bg-transparent border-none cursor-pointer p-2"
                  onClick={() => toggleExpanded(faq.id)}
                  aria-expanded={expandedItems.includes(faq.id)}
                  aria-controls={`faq-answer-${faq.id}`}
                  aria-label={`${expandedItems.includes(faq.id) ? 'Collapse' : 'Expand'} answer for: ${faq.question}`}
                >
                  <div className="w-4 h-4 relative">
                    {expandedItems.includes(faq.id) ? (
                      <div className="w-4 h-0.5 bg-indigo-600"></div>
                    ) : (
                      <div className="relative w-4 h-4">
                        <div className="absolute w-0.5 h-4 top-0 left-[7px] bg-black"></div>
                        <div className="absolute w-4 h-0.5 top-[7px] left-0 bg-black"></div>
                      </div>
                    )}
                  </div>
                </button>
              </header>
              
              {expandedItems.includes(faq.id) && faq.answer && (
                <div 
                  id={`faq-answer-${faq.id}`}
                  className="text-neutral-600 text-base md:text-lg leading-relaxed"
                  role="region"
                  aria-labelledby={`faq-question-${faq.id}`}
                >
                  {faq.answer}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
