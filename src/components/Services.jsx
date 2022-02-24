import React from 'react'

export default function Services() {
  return (
    <div id="servicesSection" className="sectionArea">
        <h2 className="sectionHeading">What We Simplify</h2>
    <div className="servicesCardArea boxShadow" id="webdev">
        <div className="cardIcon">
            <img src="images/icons/web_development.svg" alt="Web Development" />
        </div>
            <h3 className="cardHeading">Development</h3>
        <ul className="cardList">
            <li className="cardListItem">Front-End</li>
            <li className="cardListItem">Back-End</li>
            <li className="cardListItem">Wordpress</li>
            <li className="cardListItem">UI/UX</li>
            <li className="cardListItem">ML/AI</li>
            <li className="cardListItem">Data Scraping</li>
            <li className="cardListItem">AR/VR</li>
            <li className="cardListItem">Server Deployment</li>

        </ul>
    </div>
    <div className="servicesCardArea boxShadow" id="mobileapps">
        <div className="cardIcon">
            <img src="images/icons/mobile_apps.svg" alt="Mobile Apps" />
        </div>
        <h3 className="cardHeading">Mobile Apps</h3>
        <ul className="cardList">
            <li className="cardListItem">iOS Development</li>
            <li className="cardListItem">Android Development</li>
            <li className="cardListItem">Native Application</li>
            <li className="cardListItem">PWA Apps</li>
        </ul>
    </div>
    <div className="servicesCardArea boxShadow" id="marketing">
        <div className="cardIcon">
            <img src="images/icons/marketing.svg" alt="Marketing" />
        </div>
            <h3 className="cardHeading">Marketing</h3>
        <ul className="cardList">
            <li className="cardListItem">Social Media</li>
            <li className="cardListItem">SEO</li>
            <li className="cardListItem">Ads Management</li>
            <li className="cardListItem">Graphic Design</li>
            <li className="cardListItem">Video Production</li>
        </ul>
    </div>
</div>

  )
}
