import React from 'react'

export default function Home() {
  return (
    <div id="homeSection" className="sectionArea">
    <div className="homeLeft">
        <h2 id="homeHeading">Let's Simplify<br/>Your Problems</h2>
        <h1 id="homeSubline">We make Websites, Mobile Apps,<br/>Digital Marketing & Of course Designing</h1>
        {/* <button className="customBtn blueBtn consultCTA modalOpenBtn yellowHover">Get Free Consultation</button> */}
    </div>
    <div className="homeRight">
        <img src="images/illustration/illus-1.png" alt="Website, Mobile Apps, Digital Marketing and Graphic Design Illustration" className="img-fluid" />
    </div>
</div>

  )
}
