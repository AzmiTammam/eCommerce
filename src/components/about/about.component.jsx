import React from 'react'
import "./about.styles.css"
import Imag1 from "./cap2.png"

const About = () => {
    return (
        <div className="aboutHeader" id="about-section">
                <h1 className="about-title">ABOUT US</h1>
            <div className=" AboutContainer">

            <div className="About-content">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quod itaque delectus reprehenderit maiores deleniti perferendis ducimus facilis asperiores sed! Tempora asperiores odio vero cupiditate non nobis, soluta rerum obcaecati amet aperiam alias, harum itaque vitae molestiae, libero pariatur animi eveniet. Ea aspernatur eveniet architecto pariatur ipsum placeat deleniti facilis libero dolores labore nihil, ipsam repellat commodi quod numquam error laboriosam, ex dolor iusto. Ipsum repellat culpa perspiciatis possimus in laborum optio quia iste similique.
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
