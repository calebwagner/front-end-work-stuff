import React, { useState } from "react";
import { TabPanel } from "./TabPanel";
import { TabSelector } from "./TabSelector";
import { GeneralFaqs } from "./GeneralFaqs";
import { HealthFaqs } from "./HealthFaqs";
import { BillPayFaqs } from "./BillFaqs";
import styles from '../styles/styles.module.css';
import '../styles/index.css';
import '../styles/main.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export const Tabs = ({ faqs }) => {
  const faqsByTopic = {};

faqs.forEach(faq => {
  const { topicId } = faq;

  if (!faqsByTopic[topicId]) {
    faqsByTopic[topicId] = [];
  }

  faqsByTopic[topicId].push(faq);
});

// console.log("faqsByTopic", faqsByTopic);


const faqsArray = Object.entries(faqsByTopic).map(([topicId, faqs]) => {
  return { topicId, faqs };
});

// console.log("faqsArray", faqsArray[0].faqs);

  const tabs = [
    { id: "general questions",
      label: "General questions",
      component: <GeneralFaqs faqs={faqsArray[0].faqs} /> },
    {
      id: "about your health info",
      label: "About your health info",
      component: <HealthFaqs faqs={faqsArray[1].faqs} />
    },
    {
      id: "about paying your bills",
      label: "About paying your bills",
      component: <BillPayFaqs faqs={faqsArray[2].faqs} />
    }
  ];

  const [selectedTab, setSelectedTab] = useState("general questions");

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
