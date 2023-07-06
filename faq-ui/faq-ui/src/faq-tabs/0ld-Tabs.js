// import React, { useState } from "react";
// import GeneralFaqs from "./GeneralFaqs";
// import HealthFaqs from "./HealthFaqs";
// import BillFaqs from "./BillFaqs";
// // import "../index.css";

// const TabsTwo = () => {
//   // contains the index of active tab, in our case 1,2, or 3
//   const [activeIndex, setActiveIndex] = useState(1);
//   // sets the active index when a tab is clicked
//   const handleClick = (index) => setActiveIndex(index);
//   // adds the active class for styling and toggling visibility
//   const checkActive = (index, className) => activeIndex === index ? className : "";
//   return (
//     <>
//       <div className="tabs">
//         <button
//           className={`tab ${checkActive(1, "active")}`}
//           onClick={() => handleClick(1)}
//         >
//           Product Info
//         </button>
//         <button
//           className={`tab ${checkActive(2, "active")}`}
//           onClick={() => handleClick(2)}
//         >
//           Customer Reviews
//         </button>
//         <button
//           className={`tab ${checkActive(3, "active")}`}
//           onClick={() => handleClick(3)}
//         >
//           Delivery &amp; Returns
//         </button>
//       </div>
//       <div className="panels">
//         <div className={`panel ${checkActive(1, "active")}`}>
//           <GeneralFaqs />
//         </div>
//         <div className={`panel ${checkActive(2, "active")}`}>
//             <HealthFaqs />
//         </div>
//         <div className={`panel ${checkActive(3, "active")}`}>
//           <BillFaqs />
//         </div>
//       </div>
//     </>
//   );
// };

// export default TabsTwo;