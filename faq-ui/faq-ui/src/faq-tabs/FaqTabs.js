import React, { useState } from "react";
import { TabPanel } from "./TabPanel";
import { TabSelector } from "./TabSelector";
import GeneralFaqs from "./GeneralFaqs";
import HealthFaqs from "./HealthFaqs";
import BillFaqs from "./BillFaqs";

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState([
    "general",
    "about your health info",
    "about paying your bills"
  ]);

  return (
    <>
      <div className="flex border-b border-gray-300">
        <TabSelector
          isActive={selectedTab === "general"}
          onClick={() => setSelectedTab("general")}
        >
          General
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "about your health info"}
          onClick={() => setSelectedTab("about your health info")}
        >
          About your health info
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "about paying your bills"}
          onClick={() => setSelectedTab("about paying your bills")}
        >
          About paying your bills
        </TabSelector>
      </div>
      <div className="p-4">
        <TabPanel hidden={selectedTab !== "general"}>
          <GeneralFaqs />
        </TabPanel>
        <TabPanel hidden={selectedTab !== "about your health info"}>
          <HealthFaqs />
        </TabPanel>
        <TabPanel hidden={selectedTab !== "about paying your bills"}>
        <BillFaqs />
        </TabPanel>
      </div>
    </>
  );
}
