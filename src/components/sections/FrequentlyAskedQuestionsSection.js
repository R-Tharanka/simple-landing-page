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
    <section className="inline-flex flex-col items-center gap-7 absolute top-[1847px] left-[297px]" role="region" aria-labelledby="faq-heading">
      <h2 
        id="faq-heading"
        className="relative w-fit mt-[-1.00px] font-poppins-h3-poppins-27px-semibold font-[number:var(--poppins-h3-poppins-27px-semibold-font-weight)] text-indigo-600 text-[length:var(--poppins-h3-poppins-27px-semibold-font-size)] tracking-[var(--poppins-h3-poppins-27px-semibold-letter-spacing)] leading-[var(--poppins-h3-poppins-27px-semibold-line-height)] whitespace-nowrap [font-style:var(--poppins-h3-poppins-27px-semibold-font-style)]"
      >
        Frequently asked questions
      </h2>
      <div className="inline-flex flex-col items-start gap-[15px] relative flex-[0_0_auto]">
        {faqData.map((faq) => (
          <article 
            key={faq.id}
            className="flex flex-col w-[846px] items-start gap-[13px] p-6 relative flex-[0_0_auto] bg-[#faf7ff] rounded-[7px]"
          >
            <header className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className={`relative flex-1 mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[22px] tracking-[0] leading-7 ${expandedItems.includes(faq.id) ? 'text-indigo-600' : 'text-black'}`}>
                {faq.question}
              </h3>
              <button
                className="inline-flex items-center justify-center gap-2.5 pt-2 pb-0 px-0 relative self-stretch flex-[0_0_auto] bg-transparent border-none cursor-pointer"
                onClick={() => toggleExpanded(faq.id)}
                aria-expanded={expandedItems.includes(faq.id)}
                aria-controls={`faq-answer-${faq.id}`}
                aria-label={`${expandedItems.includes(faq.id) ? 'Collapse' : 'Expand'} answer for: ${faq.question}`}
              >
                <div className="relative w-3.5 h-3.5">
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
                className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-600 text-lg tracking-[0] leading-[30px]"
                role="region"
                aria-labelledby={`faq-question-${faq.id}`}
              >
                {faq.answer}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
