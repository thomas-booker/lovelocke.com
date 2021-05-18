import { render } from "@testing-library/react";
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'


class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="blue-grey darken-4" style={{fontWeight: 500}}>
                    <div class="nav-wrapper">
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/aboutme">About me</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/contactme">Contact</a></li>
                    </ul>
                    <ul class="right hide-on-med-and-down">
                        <li style={{marginRight:"10px", marginTop: 10}}><FontAwesomeIcon icon={faGithub} size="3x" /></li>
                        <li style={{marginRight:"10px", marginTop: 10}}><FontAwesomeIcon icon={faTwitterSquare} size="3x" /></li>
                        <li style={{marginRight:"10px", marginTop: 10}}><FontAwesomeIcon icon={faLinkedin} size="3x" /></li>
                    </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;