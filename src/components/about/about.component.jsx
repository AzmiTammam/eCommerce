import React from 'react'
import "./about.styles.css"
import Imag1 from "./cap2.png"

const About = () => {
    return (
        <div className="aboutHeader" id="about-section">
                <h1 className="about-title">About Us</h1>
            <div className=" AboutContainer">

            <div className="About-content">
            <p>
            Welcome to iCAP, your number one source for all different kinds of hats.
             We're dedicated to giving you the very best of our products , with a focus on three characteristics: dependability, 
             customer service and uniqueness.
            Founded in 2009 by us, iCAP has come a long way from its beginnings 
            in Amman,Jordan .
            </p>
            </div>

             <div className="imag">
             <img src={Imag1} width="300px" className="aboutImg" alt="show"/>
             </div>

            </div>
        </div>
    )
}

export default About
