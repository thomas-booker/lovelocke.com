import { render } from "@testing-library/react";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'


function Navbar() {
    return (
        <div>
            <nav class="blue-grey darken-3">
                <div class="nav-wrapper">
                <a href="#" class="brand-logo center">Lovelocke</a>
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/aboutme">About me</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contactme">Contact</a></li>
                </ul>
                <ul class="right hide-on-med-and-down">
                    <li style={{marginRight:"10px"}}><FontAwesomeIcon icon={faFacebook} size="2x" /></li>
                    <li style={{marginRight:"10px"}}><FontAwesomeIcon icon={faTwitter} size="2x" /></li>
                    <li style={{marginRight:"10px"}}><FontAwesomeIcon icon={faInstagram} size="2x" /></li>
                </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;