import { useState } from "react";
import "../styles/main.css"

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
        <div className="expansion-panel__content--body">{<div dangerouslySetInnerHTML={{ __html: children }} />}</div>
     </div>}
    </div>
  );
};