
import { Tabs } from "./faq-tabs/Tabs.js";
// import TabsTwo from "./faq-tabs/Tabs.js";
// import "./styles/index.css";
// import "./styles/main.css";
import faqs from './data/faqs.json';

export default function App() {
  return (
    <div>
      <h1 class="heading-bar hca-text--title">MyHealthONE Help and Support</h1>
      <div id="hca-faq" className="container-md-removed" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', maxWidth: '992px', margin: '0 auto'}}>
        <div class="row hca-margin-top-25 hca-margin-bottom-25" style={{display: 'flex', width: '100%'}}>
          <div class="col-sm-6-removed" style={{width:'50%'}}>
            <div class="hca-padding-top-20 hca-padding-bottom-20">
              <p class="hca-text--bold hca-margin-bottom-10">Do you need immediate assistance?</p>
              <p>If you are having a health-related emergency, please call 9-1-1. For immediate assistance with
                MyHealthONE, please call our MyHealthONE Support Team.</p>
            </div>
          </div>

          <div class="col-sm-5-removed col-sm-offset-1-removed" style={{width:'41.666666666%', marginLeft: '8.333333%'}}>
            <div class="panel panel-default">
              <div class="panel-body">
                <p class="hca-text--bold">Contact the MyHealthONE Support team</p>
                <button class="hca-button hca-button--primary" data-ember-action="" data-ember-action-230="230">
                  <span aria-hidden="true" class="material-icons hca-button__icon hca-button__icon--left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg></span>
                  (855) 422-6625
                </button>
                <a href="/mh1/secure/mh1/cpp/messages" class="hca-button hca-button--primary hca-margin-left-0" data-ember-action="" data-ember-action-231="231">
                <i aria-hidden="true" class="material-icons hca-button__icon hca-button__icon--left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></i>
                  Send a secure message
                </a>
              </div>
            </div>
          </div>
        </div>
        <div  style={{maxWidth:'992px', width: '100%'}}>
          <Tabs faqs={faqs}/>
        </div>
     </div>
    </div>
  );
}