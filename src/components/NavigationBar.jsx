import React from 'react'

export default function NavigationBar() {
  return (
      <>
    <div className="navigDesktop">
    <div className="navigBar">
        <div className="navigLogo">
            <img className="img-fluid" alt="SimplSo Logo" src="images/logos/horizontalLogoText/fit/svg/textLogo_blueFilled_horizontal.svg" />
        </div>
        <ul className="navigList">
            <li><a className="navigListItem" href="#homeSection">Home</a></li>
            <li><a className="navigListItem" href="#servicesSection">Services</a></li>
            <li><a className="navigListItem" href="#portfolioSection">Portfolio</a></li>
        </ul>
    </div>
</div>
<div className="navigMobile navigHome">
    <div className="navigHead">
        <div className="navigLogo">
            <img className="img-fluid" alt="SimplSo Logo" src="images/logos/horizontalLogoText/fit/svg/textLogo_blueFilled_horizontal.svg" />
        </div>
        {/* <div className="navigIcon navigMenu">
            <img className="img-fluid" alt="Menu" src="images/icons/menu_white.svg" />
        </div> */}
    </div>
</div>

{/* <div className="navigMobile">
    
    <div className="navigBar">
        <div className="navigHead">
            <div className="navigLogo">
                <img className="img-fluid" alt="SimplSo Logo" src="images/logos/horizontalLogoText/fit/svg/textLogo_whiteFilled_horizontal.svg" />
            </div>
            <div className="navigIcon navigClose">
                <img className="img-fluid" alt="Close" src="images/icons/close_blue.svg" />
            </div>
        </div>
        <ul className="navigList">
            <li><a className="navigListItem" href="#homeSection">Home</a></li>
            <li><a className="navigListItem" href="#servicesSection">Services</a></li>
            <li><a className="navigListItem" href="#portfolioSection">Portfolio</a></li>
            <li><a className="navigListItem" href="/blog">Blog</a></li>
            <li className="modalOpenBtn"><span className="navigListItem" style={{"color":"var(--simplso-yellow)"}}>Contact Us</span></li>
        </ul>
    </div>
</div>   */}
</>
  )
}
