import React, { useState } from "react";
import "./Accordion.css";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="accordion-title">{title}</div>
        <div className={`accordion-icon ${isOpen ? "open" : ""}`}>
          {isOpen ? <CiCircleMinus /> : <CiCirclePlus />}
        </div>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;