import React from 'react'

export default function Usps() {
  return (
    <div className="blueBG">
    <div id="uspsSection" className="sectionArea">
        <h2 className="sectionHeading whiteHeading">Why SimplSo?</h2>
        <ul className="uspsList">
            <li className="uspsListItem">
                <img src="images/icons/list-1.svg" alt="Cost Effective Icon" className="uspsListItemIcon" />
                <div className="uspsListItemInfo">
                    <h3 className="uspsListItemHeading">Cost Effective</h3>
                    <div className="uspsListItemDesc">
                        Effective utilization of capital is quintessential for any startup. Our product development model is transparent, reliable and cost-effective that ensures you get the maximum bang for your bucks.
                    </div>
                </div>
            </li>
            <li className="uspsListItem">
                <img src="images/icons/list-2.svg" alt="Flexibility Icon" className="uspsListItemIcon" />
                <div className="uspsListItemInfo">
                    <h3 className="uspsListItemHeading">Flexibility in Team Scaling</h3>
                    <div className="uspsListItemDesc">
                        Ramp up your team or reduce the number of resources - designers, developers or QAs - anytime as per your needs.
                    </div>
                </div>
            </li>
            <li className="uspsListItem">
                <img src="images/icons/list-3.svg" alt="Agile Process Icon" className="uspsListItemIcon" />
                <div className="uspsListItemInfo">
                    <h3 className="uspsListItemHeading">Agile Process</h3>
                    <div className="uspsListItemDesc">
                        We develop enterprise-grade applications employing Agile and Scrum that enables the delivery of high-priority feature first, flexibility to adapt to changes and produce better quality in less time
                    </div>
                </div>
            </li>
            <li className="uspsListItem">
                <img src="images/icons/list-4.svg" alt="Security Icon" className="uspsListItemIcon" />
                <div className="uspsListItemInfo">
                    <h3 className="uspsListItemHeading">Best Security Practices</h3>
                    <div className="uspsListItemDesc">
                        High-level security is not an option for enterprise-grade apps - it's a must. We comply with the highest security practices 
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
  )
}
