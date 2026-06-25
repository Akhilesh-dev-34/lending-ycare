import { useState } from 'react';
import { faqItems } from '../data/faq';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="py-20 bg-bg max-tablet:py-16" id="faq">
      <div className="max-w-[1140px] mx-auto px-6 max-mobile:px-4">
        <h2 className="text-center mb-10 text-[clamp(32px,4vw,36px)] font-extrabold text-text-heading leading-[1.1] max-mobile:text-[clamp(26px,6.5vw,32px)]">
          Frequently asked questions
        </h2>
        <div className="max-w-[720px] mx-auto">
          {faqItems.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div className="border-b border-border" key={item.question}>
                <button
                  className="w-full bg-transparent border-none py-5 text-base font-semibold text-text-heading leading-[1.1] text-left cursor-pointer flex items-center justify-between font-inherit gap-4 max-mobile:text-[15px] max-mobile:py-[18px]"
                  type="button"
                  onClick={() => toggleItem(index)}
                >
                  {item.question}
                  <span
                    className={`w-6 h-6 rounded-full border-2 border-accent flex items-center justify-center shrink-0 transition-transform duration-300 text-base ${isActive ? 'rotate-45' : ''}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height,padding] duration-350 ease-in-out ${isActive ? 'max-h-[300px] pb-5' : 'max-h-0'}`}
                >
                  <p className="text-base text-text-body leading-[1.7]">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
