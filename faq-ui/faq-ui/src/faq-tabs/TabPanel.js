import React from "react";

const TabPanel = ({ children, hidden }) => {
  // console.log("hidden", hidden);

  return (
    <div hidden={hidden}>
      {children}
    </div>
  );
};

export { TabPanel };
