import React, {useStart, useEffect} from 'react';
import M from 'materialize-css';

const Parallax = () => {

    useEffect(()=>{
        let elements = document.querySelectorAll(".parallax");
        M.Parallax.init(elements);
    },[]);

    return (
        <div className="container">
        <div className="parallax-container">
        <div className="section white">
                <h2>Parallax</h2>
                <p>Demo Parallax</p>
            </div>
            <div className="parallax">
                <img src="https://www.cardinia.co.uk/wp-content/uploads/2015/03/high-tech-wallpaper-1080p-HD.jpg" alt="parallax_1"/>
            </div>

        </div>
        <div className="parallax-container">
        <div className="section white">
                <h2>Parallax</h2>
                <p>Demo Parallax</p>
            </div>
            <div className="parallax">
                <img src="https://cdn.suwalls.com/wallpapers/typography/tech-41219-1920x1080.jpg" alt="parallax_2"/>
            </div>

        </div>
        <div>
            <h2>Test</h2>
            <p>Demo Parallax</p>
            <p>Demo Parallax</p>
            <p>Demo Parallax</p>
            <p>Demo Parallax</p>
            <p>Demo Parallax</p>
            <p>Demo Parallax</p>
            <p>Demo Parallax</p>
            <p>Demo Parallax</p>
            <p>Demo Parallax</p>
            <p>Demo Parallax</p>
            <p>Demo Parallax</p>
            <p>Demo Parallax</p>
            <p>Demo Parallax</p>
            <p>Demo Parallax</p>
            <p>Demo Parallax</p>
            <p>Demo Parallax</p>
        </div>
        <div className="parallax-container">
        <div className="section white">
                <h2>Parallax</h2>
                <p>Demo Parallax</p>
            </div>
            <div className="parallax">
                <img src="https://i.pinimg.com/originals/ab/65/25/ab6525b299477019027ddbd33a90c4b7.jpg" alt="parallax_3"/>
            </div>

        </div>
        </div>
    );
};

export default Parallax;