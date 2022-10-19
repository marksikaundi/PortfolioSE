import React from 'react'
import './Intro.css'
import Github from "./icon/github.png"
import Linkedin from "./icon/linkedin.png"
import Instagram from "./icon/instagram.png"

const Intro = () => {
  return (
    <div className="intro">
        {/* left side */}
        <div className="i-left">
            <div className="i-name">
                <span>Hey! I Am</span>
                <span> Mark Sikaundi</span>
                <span> Software Developer with high level of experience in web designing and development, producting the Quality work</span>
            </div>
            <button className='button i-button'>Hire me</button>
            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={Linkedin} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
        {/* right side */}
        <div className="i-right">
            I am right side
        </div>
    </div>
    )
}

export default Intro