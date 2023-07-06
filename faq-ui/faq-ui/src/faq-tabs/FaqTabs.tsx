import React, { useState } from "react";
import { TabPanel } from "./TabPanel";
import { TabSelector } from "./TabSelector";
import { GeneralFaqs } from "./GeneralFaqs";
import { HealthFaqs } from "./HealthFaqs";
import { BillPayFaqs } from "./BillFaqs";
// import styles from '../styles/styles.module.css';
import '../styles/index.css';
import '../styles/main.css';

interface Faq {
  topicId: string;
}

interface FaqArray {
  topicId: string;
  faqs: Faq[];
}

interface Tab {
  id: string;
  label: string;
  component: React.ReactNode;
}

interface TabsProps {
  faqs: Faq[];
}

// type TabsProps = {
//     faqs: Faq[];
//   }

export const Tabs = ({ faqs }: TabsProps) => {
  const faqsByTopic: { [key: string]: Faq[] } = {};

  faqs.forEach((faq) => {
    const { topicId } = faq;

    if (!faqsByTopic[topicId]) {
      faqsByTopic[topicId] = [];
    }

    faqsByTopic[topicId].push(faq);
  });

  const faqsArray: FaqArray[] = Object.entries(faqsByTopic).map(
    ([topicId, faqs]) => {
      return { topicId, faqs };
    }
  );

  const tabs: Tab[] = [
    {
      id: "general questions",
      label: "General questions",
      component: <GeneralFaqs faqs={faqsArray[0].faqs} />,
    },
    {
      id: "about your health info",
      label: "About your health info",
      component: <HealthFaqs faqs={faqsArray[1].faqs} />,
    },
    {
      id: "about paying your bills",
      label: "About paying your bills",
      component: <BillPayFaqs faqs={faqsArray[2].faqs} />,
    },
  ];

  const [selectedTab, setSelectedTab] = useState<string>("general questions");

  const handleTabClick = (tabId: string) => setSelectedTab(tabId);

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
      <div className="visible-xs">
        <div className="hca-tabs--control scroll-left">
          <button
            tabIndex={0}
            className="hca-button hca-button--floating-action hca-button--primary hca-tabs--control-prev"
          >
            <i aria-hidden="true" className="material-icons">chevron_left</i>
          </button>
        </div>
        <div className="hca-tabs--control scroll-right">
          <button
            tabIndex={0}
            className="hca-button hca-button--floating-action hca-button--primary hca-tabs--control-next"
          >
            <i aria-hidden="true" className="material-icons">chevron_right</i>
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
};
