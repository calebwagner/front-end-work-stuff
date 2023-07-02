import React from "react";

const TabSelector = ({ isActive, children, onClick }) => (

  <li
    className={`hca-tabs--max-width
    ${
      isActive
        ? "hca-tabs--max-width active"
        : "hca-outline-wider hca-underline-link"
    }`}
    onClick={onClick}
  >
    <a href="#" className="hca-outline-wider hca-underline-link">
    {children}
    </a>
  </li>
);

// CSS styles
const styles = `
.mr-8 {
  margin-right: 8px;
}

.group {
  display: inline-flex;
}

.items-center {
  align-items: center;
}

.px-2 {
  padding-left: 2px;
  padding-right: 2px;
}

.py-4 {
  padding-top: 4px;
  padding-bottom: 4px;
}

.border-b-2 {
  border-bottom-width: 2px;
}

.font-medium {
  font-weight: 500;
}

.text-sm {
  font-size: 0.875rem;
}

.leading-5 {
  line-height: 1.25rem;
}

.cursor-pointer {
  cursor: pointer;
}

.whitespace-nowrap {
  white-space: nowrap;
}
.border-indigo-500 {
  border-color: #3f51b5;
}

.text-indigo-600 {
  color: #3f51b5;
}

.focus\:outline-none:focus {
  outline: none;
}

.focus\:text-indigo-800:focus {
  color: #3f51b5;
}

.focus\:border-indigo-700:focus {
  border-color: #3f51b5;
}

.border-transparent {
  border-color: transparent;
}

.text-gray-500 {
  color: #6b7280;
}

.hover\:text-gray-600:hover {
  color: #4b5563;
}

.hover\:border-gray-300:hover {
  border-color: #d1d5db;
}

.focus\:text-gray-600:focus {
  color: #4b5563;
}

.focus\:border-gray-300:focus {
  border-color: #d1d5db;
}

`;

// Add the styles to the head of the document
const styleElement = document.createElement("style");
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

export { TabSelector };
