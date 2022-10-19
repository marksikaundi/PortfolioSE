import React from 'react'
import './Intro.css'
import Github from "../Intro/img/github.png"
import Linkedin from "../Intro/img/linkedin.png"
import Instagram from "../Intro/img/instagram.png"
import Vector1 from "../Intro/img/Vector1.png"
import Vector2 from "../Intro/img/Vector2.png"
import boy from "../Intro/img/boy.png"
// import thumbup from "../Intro/img/thumbup.png"
// import glassesimoji from "../Intro/img/glassesimoji.png"
import Crown from "../Intro/img/crown.png"
import FloatingDiv from '../../FloatingDiv/FloatingDiv'

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
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <div style={{top: '-4%', left: '68%'}}>
                <FloatingDiv img={Crown}/>
            </div>
        </div>
    </div>
    )
}

export default Intro