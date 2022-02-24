import React from 'react'

export default function Portfolio() {
  return (
    <div id="portfolioSection" className="sectionArea">
    <h2 className="sectionHeading">What we Simplified</h2>
    <ul className="portfolioList">
        <li className="portfolioListItem portfolioListItemFull boxShadow">
            <div className="portfolioListItemInfo">
                <div className="portfolioListItemHeadingArea">
                    <h3 className="portfolioListItemHeading">TIMS Website</h3><div className="portfolioListItemTag">Web Development</div>
                </div>
                <div className="portfolioListItemDesc">
                    SimplSo developed a website for TIMS Magazines, a Customised Magazines creator with more than 1000 magazines created. Wordpress along with Divi themes was used to develop the website. As TIMS Magazines were a team of creative people, our challenge was to design a website that could match their brand voice and tone.
                </div>
                <a target="_blank" href="https://www.timsmagazines.com" className="portfolioListItemLink" rel="noreferrer">Visit Website</a>
            </div>
            <img src="images/photos/tims_portfolio.svg" alt="TIMS Website Portfolio" className="portfolioListItemImage img-fluid" />
        </li>
        <div className="portfolioListItemHalf">
            <li className="portfolioListItem boxShadow">
                <div className="portfolioListItemInfo">
                    <div className="portfolioListItemHeadingArea">
                        <h3 className="portfolioListItemHeading">Curry Zone</h3><div className="portfolioListItemTag">Graphic Design</div>
                    </div>
                    <div className="portfolioListItemDesc">
                        SimplSo created content for social media for a restaurant Curry Zone based in Austraila 
                    </div>
                    <a target="_blank" href="https://www.facebook.com/CurryZoneWishart/" className="portfolioListItemLink" rel="noreferrer">View Project</a>
                </div>
                <img src="images/photos/curry_zone_portfolio-01.png" alt="TIMS Website Portfolio" className="portfolioListItemImage img-fluid" />
            </li>
            <li className="portfolioListItem boxShadow">
                <div className="portfolioListItemInfo">
                    <div className="portfolioListItemHeadingArea">
                        <h3 className="portfolioListItemHeading">Param STEM Club</h3><div className="portfolioListItemTag">Social Media Marketing</div>
                    </div>
                    <div className="portfolioListItemDesc">
                        SimplSo did this project for a STEM club and till now it has greatly helped reaching more wider audiance
                    </div>
                    <a target="_blank" href="https://www.instagram.com/paramstemclub" className="portfolioListItemLink" rel="noreferrer">View Project</a>
                </div>
                <img src="images/photos/param_stem_portfolio-01.png" alt="TIMS Website Portfolio" className="portfolioListItemImage img-fluid" />
            </li>
        </div>
        <li className="portfolioListItem portfolioListItemFull boxShadow">
            <div className="portfolioListItemInfo">
                <div className="portfolioListItemHeadingArea">
                    <h3 className="portfolioListItemHeading">Incubator Website</h3><div className="portfolioListItemTag">UI/UX</div>
                </div>
                <div className="portfolioListItemDesc">
                    SimplSo has designed this website for an incubator. The aim was to make a simple user interface which allows the user to easily contemplate the information.
                </div>
                <a target="_blank" href="https://www.figma.com/proto/VFD7yNQuvuTvJUDTytOLDt/AIIH-Website?node-id=209%3A335&scaling=min-zoom" className="portfolioListItemLink" rel="noreferrer">View Project</a>
            </div>
            <img src="images/photos/incubator_portfolio.svg" alt="TIMS Website Portfolio" className="portfolioListItemImage img-fluid" />
        </li>
    </ul>
</div>
  )
}
