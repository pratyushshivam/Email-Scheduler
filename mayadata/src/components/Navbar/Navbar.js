import React, { Component, useEffect } from 'react'
import './Navbar.css'
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg'
import { ReactComponent as AboutIcon } from '../../assets/icons/about.svg'

function Navbar() {

    useEffect(() => {

        if (localStorage.getItem("selected") === "home") {
            var element = document.getElementById("home")
            element.classList.add("background-color")
        }
        if (localStorage.getItem("selected") === "about") {
            var element = document.getElementById("about")
            element.classList.add("background-color")
        }
    })


    function aboutClicked(e) {
        e.preventDefault()
        window.location.replace("/about");
        var element = document.getElementById("about");
        element.classList.toggle("background-color")
        localStorage.setItem("selected", "about");

    }
    function homeClicked(e) {
        e.preventDefault()
        window.location.replace("/home");
        var element = document.getElementById("home");
        element.classList.toggle("background-color")
        localStorage.setItem("selected", "home");
    }

    return (
        <div className="navbar__main">
            <div className="navbar__main__all">
                <div className="navbar__main__all__header">
                    <div className="hamburger">
                        <div className="line "></div>
                        <div className="line"></div>
                        <div className="line short"></div>

                    </div>
                    <p>1806225</p>

                </div>
                <div className="navbar__main__all__redirect">
                    <div id="home" onClick={homeClicked} className="navbar__main__all__redirect__home  background">
                        <HomeIcon />
                        <h2 >Home</h2>

                    </div>
                    <div id="about" onClick={aboutClicked} className="navbar__main__all__redirect__home">

                        <AboutIcon />
                        <h2 >About Me</h2>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar
