import { render } from "@testing-library/react";
import react, { Component } from "react";
import Tom from './img/Tom.jpg'
import M from 'materialize-css'


class Header extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    render() {
    return (
        <div className="container white-text z-depth-2"  style={{marginTop: 20}}>
            <div className="row" >
                <div className="col s4">
                    <img src={Tom} class="responsive-img circle z-depth-2" style={{marginTop: 10, marginBottom: 10}}/>
                </div>
                <div className="col s7 blue-grey darken-3 z-depth-2" style={{marginTop: 15, marginLeft: 25, marginBottom: 15}}>
                    <h3 style={{textShadow: "1px 1px 6px #000000"}}>Hi, I'm Tom Booker</h3>
                    <h3 style={{textShadow: "1px 1px 6px #000000"}}>Java Developer</h3>
                    <h3 style={{textShadow: "1px 1px 6px #000000"}}>Based in Manchester</h3>
                </div>
            </div>
        </div>
    )
}
}

export default Header;