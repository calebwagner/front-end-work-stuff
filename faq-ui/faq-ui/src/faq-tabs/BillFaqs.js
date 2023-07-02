import React from 'react';
import styles from '../styles/styles.module.css';
import { AccordionItem } from '../components/AccordionItem';

export const BillPayFaqs = () => {
  return (
    <div>
      <div className={styles.accordion}>
        <div>
          <AccordionItem question="#3 What is Lorem Ipsum?">
            #3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AccordionItem>
          <AccordionItem question="Where does it come from?">
            Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
          </AccordionItem>
          <AccordionItem question="Why do we use it?">
            12 Suspendisse massa risus, pretium id interdum in, dictum sit amet ante. Fusce vulputate purus sed tempus feugiat.
          </AccordionItem>
        </div>
      </div>
    </div>
  );
}
