import React, { useState } from "react";
import { TabPanel } from "./TabPanel";
import { TabSelector } from "./TabSelector";
import { GeneralFaqs } from "./GeneralFaqs";
import { HealthFaqs } from "./HealthFaqs";
import { BillPayFaqs } from "./BillFaqs";
import styles from '../styles/styles.module.css';
import '../styles/index.css';
import '../styles/main.css';


export default function Tabs() {
  const tabs = [
    { id: "general",
      label: "General",
      component: <GeneralFaqs /> },
    {
      id: "about your health info",
      label: "About your health info",
      component: <HealthFaqs />
    },
    {
      id: "about paying your bills",
      label: "About paying your bills",
      component: <BillPayFaqs />
    }
  ];

  const [selectedTab, setSelectedTab] = useState("general");

  const handleTabClick = (tabId) => setSelectedTab(tabId);

  return (
    <>
    <div className="hca-tabs--wrap">
  <div className="hca-tabs--scroll-container">
    <div className="hca-tabs--max-width">

      <ul className="hca-tabs hca-tabs--border-bottom">
        {tabs.map((tab) => (
          <TabSelector
            key={tab.id}
            isActive={selectedTab === tab.id}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </TabSelector>
        ))}
      </ul>
      </div>
      </div>

</div>
<div class="visible-xs">
      <div class="hca-tabs--control scroll-left">
        <button tabindex="0" class="hca-button hca-button--floating-action hca-button--primary hca-tabs--control-prev">
          <i aria-hidden="true" class="material-icons">chevron_left</i>
        </button>
      </div>
      <div class="hca-tabs--control scroll-right">
        <button tabindex="0" class="hca-button hca-button--floating-action hca-button--primary hca-tabs--control-next">
          <i aria-hidden="true" class="material-icons">chevron_right</i>
        </button>
      </div>
    </div>
      <div className="expansion-panel--container">
        {tabs.map((tab) => (
          <TabPanel key={tab.id} hidden={selectedTab !== tab.id}>
            {tab.component}
          </TabPanel>
        ))}
      </div>
    </>
  );
}
