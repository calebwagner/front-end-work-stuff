import React from 'react';
import styles from '../styles/styles.module.css';
import { AccordionItem } from '../components/AccordionItem';

export const GeneralFaqs = ({ faqs }) => {
  console.log("faqs", faqs);
  return (
    <>
      <div className="">
        <div>
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            question={faq.question}
          >
            {faq.answer}
          </AccordionItem>
        ))}
        </div>
      </div>
    </>
  );
};
