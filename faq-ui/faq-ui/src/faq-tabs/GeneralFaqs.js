import React from 'react';
import styles from '../styles/styles.module.css';
import { AccordionItem } from '../components/AccordionItem';

export const GeneralFaqs = () => {
  return (
    <div>
      <div className={styles.accordion}>
        <div>
          <AccordionItem question="What features are available in MyHealthONE to help me manage my care?">
            <ul>
              <li>
                <strong>Hospital Visits</strong>
              </li>
              <ul>
                <li>Health information availability for the past 24 months.</li>
                <li>Creating a Caregiver/proxy relationship for hospital medical records.</li>
                <li>Paying a hospital bill.</li>
                <li>Register for an inpatient or outpatient procedure, labor and delivery, or mammogram.</li>
                <li>Find and register for a hospital class or other event.</li>
                <li>Share records</li>
              </ul>
              <br />
              <br />
              <li>
                <strong>Physician Visits</strong>
              </li>
              <ul>
                <li>Making an appointment with my primary care physician or a specialist</li>
              </ul>
              <br />
              <br />
              <li>
                <strong>Urgent Care</strong>
              </li>
              <ul>
                <li>Health information availability. (<strong>effective date June 1, 2020</strong>)</li>
                <li>Sharing my records. (<strong>effective date June 1, 2020</strong>)</li>
              </ul>
            </ul>
          </AccordionItem>
          <AccordionItem question="Can I use MyHealthONE on someone else's behalf (like a family member or loved one)?">
            <ul>
              <li>Yes, you can manage the health of your loved ones with MyHealthONE.</li>
              <li>To become a MyHealthONE caregiver, visit our hospital with your dependent or loved one and complete the Proxy Express Waiver at the patient registration, health information management, or medical records office. You will need to bring proof of identification and, if applicable, proof of guardianship of the minor (e.g., driver’s license, birth certificate, or legal guardian court document). You may also print and complete the&nbsp;<a href="https://hcahealthcare.com/myhealthone/myhealthone-proxy-forms.dot" target="_blank" rel="noopener" className="hca-hyperlink hca-outline-wider">&nbsp;Proxy Express Waiver</a>&nbsp;in advance. You will need to bring the completed waiver and proof of identification, if applicable, proof of guardianship of the minor with you to the patient registration, health information management, or medical records office.</li>
              <ul>
                <li><strong><a href="https://hcahealthcare.com/myhealthone/myhealthone-proxy-forms.dot" target="_blank" rel="noopener" className="hca-hyperlink hca-outline-wider">For patients aged 0-12</a></strong>, please take the&nbsp;<em>Proxy for Minor Patient 0-12 Years of Age Express Waiver and Consent</em>&nbsp;to the hospital the minor patient most recently visited. A parent or legal guardian must present photo identification. Although anyone can be the caregiver or proxy, the&nbsp;<em>Proxy for Minor Patient 0-12 Years of Age Express Waiver and Consent</em>&nbsp;must be signed by the parent or legal guardian at the hospital’s registration desk.</li>
                <li><strong><a href="https://hcahealthcare.com/myhealthone/myhealthone-proxy-forms.dot" target="_blank" rel="noopener" className="hca-hyperlink hca-outline-wider">For patients aged 13-17</a></strong>, select a trusted individual as your caregiver. Please take the&nbsp;<em>Proxy for Minor Patient 13-17 Years of Age Express Waiver and Consent</em>&nbsp;to the hospital you most recently visited. A parent or legal guardian and the minor patient must both sign the&nbsp;<em>Proxy for Minor Patient 13-17 Years of Age Express Waiver and Consent</em>&nbsp;and present photo identification at the hospital’s registration desk.</li>
                <li><strong><a href="https://hcahealthcare.com/myhealthone/myhealthone-proxy-forms.dot" target="_blank" rel="noopener" className="hca-hyperlink hca-outline-wider">For adult patients</a></strong>, please take the&nbsp;<em>Proxy for Adult Patient Express Waiver and Consent</em>&nbsp;to the hospital you most recently visited. You will need to present photo identification at the hospital and be ready to provide information about your caregiver or proxy.</li>
              </ul>
            </ul>
          </AccordionItem>
          <AccordionItem question="Does MyHealthONE work on mobile devices?">
            <ul>
              <li>Yes, you can access MyHealthONE through your mobile browser and on the MyHealthONE mobile app. Our mobile app is available for both iOS and Android devices</li>
            </ul>
            <div className="row" style={{ paddingLeft: '20px' }}>
              <a href="http://itunes.apple.com/app/id1493014954" target="_blank" id="js-download-ios" className="col-xs-6 col-sm-2" title="Download the MyHealthONE mobile app from the iOS app store">
                <img src="/cpp/hca-ui/img/app-store-badge.png" width="125px" alt="iOS app store button image" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.hcahealthcare.mhom" target="_blank" id="js-download-android" className="col-xs-6 col-sm-2" title="Download the MyHealthONE mobile app from the Google Play store" style={{ marginLeft: '-15px' }}>
                <img src="/cpp/hca-ui/img/google-play-badge.png" width="125px" alt="Google Play app store button image" />
              </a>
            </div>
          </AccordionItem>
        </div>
      </div>
    </div>
  );
};
