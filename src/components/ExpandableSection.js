import React, { useState } from "react";
const ExpandableSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleOpen}
      >
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default ExpandableSection;
