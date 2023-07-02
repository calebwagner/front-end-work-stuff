import { useState } from "react";
import chevronDown from '../assets/chevron-down.svg';
import styles from '../styles/styles.module.css';


export const AccordionItem = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="expansion-panel">
      <a href="#" className={`expansion-panel--heading ${isOpen == false ? "collapsed" : "" }`}  onClick={toggleAccordion}>
        <span className="expansion-panel--title">{question}</span>
      </a>
      {isOpen &&
      <div className={`expansion-panel__content collapse ${isOpen == true ? "in" : ""}`}>
        <div className="expansion-panel__content--body">{children}</div>
     </div>}
    </div>
  );
};