import React from 'react'

export default function Footer() {
  return (
    <div className="blueBG">
    <div id="footerSection">
        <div className="leftFooter">
            <img src="images/logos/noTag/fit/svg/textLogo_whiteFilled.svg" alt="SimplSo Logo" className="footerLogo" />
            <div className="footerCopyright">&#169; SimplSo IT Solutions Pvt. Ltd. 2022
            </div>
        </div>
        <div className="rightFooter">
            <div className="footerHead">Reach out to us</div>
            <div className="footerContact">
                <img src="images/icons/email.svg" alt="" className="footerContactIcon" />
                <a href="mailto:info@simplso.com" className="footerContactText">info@simplso.com</a>
            </div>
            <div className="footerSocial">
                <a target="_blank" href="https://www.linkedin.com/company/simplso/" rel="noreferrer"><img src="images/icons/linkedin.svg" alt="" className="footerSocialIcon" /></a>
                <a target="_blank" href="https://www.instagram.com/simpl.so/" rel="noreferrer"><img src="images/icons/insta.svg" alt="" className="footerSocialIcon" /></a>
                <a target="_blank" href="https://www.facebook.com/simplso/" rel="noreferrer"><img src="images/icons/facebook.svg" alt="" className="footerSocialIcon" /></a>
            </div>
        </div>
    </div>
</div>

  )
}
