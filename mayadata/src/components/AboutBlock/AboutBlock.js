import React from 'react'
import './AboutBlock.css'

function AboutBlock() {
    return (
        <div className="abouts__main">
            <p>Name : Pratyush Shivam <br />
            Roll : 1806225 <br />
          Github profile : <a href="https://github.com/pratyushshivam">https://github.com/pratyushshivam</a> <br />
          Skills : ReactJs, ElectronJs AngularJs, NodeJs, ExpressJs, Spring Boot</p> <br />
            <p>
                <p>My Projects : </p> <br />
                1. Codezi - A windows IDE built using ElectronJs for code compilation including online IDE support for all languages <br />
                2. Galassia Assistant - Windows assistant for playing music, browsing and performing tasks. <br />
                3. Ecommerce Website - Full Stack Ecommerce website built using Nodejs ExpressJs <br />
                4. Online Search Engine using ReactJs
          </p>

        </div>
    )
}

export default AboutBlock
