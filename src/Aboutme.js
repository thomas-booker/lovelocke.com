import M from 'materialize-css'
import react, { Component } from 'react'

class Aboutme extends Component {

    componentDidMount() {
        M.AutoInit();
    }


    
    render() {
    return (
        <div class="container white-text z-depth-2">
            <div className="row">
                <div className="col s5">
                    <h2 style={{textAlign: "center"}}>About me</h2>
                    <p>After completing a development project whilst working in IT support I decided
                        to switch careers to a programmer full time. My journey began with going back
                        to university and completing a Masters in Computing, finishing with Distinction.
                    </p>
                    <p>Half-way through my course I found employment as an Application Server Developer,
                        and I have been in this role now for three years.
                    </p>
                    <p>I have continued to learn and develop, focusing on increasing my knowledge of
                        the Cloud, with AWS and Heroku, and also completing several projects using
                        NodeJS and React. As well as learning new languages and frameworks I have also
                        worked on improving my Java skills, with a focus on Design Patterns and supporting
                        frameworks such as Spring / Springboot.
                    </p>
                </div>



                <div class="col s5 blue-grey offset-s1 darken-3" style={{marginTop: 20}}>
                    <ul id="tabs-swipe-demo" class="tabs tabs-fixed-width tab-demo blue-grey darken-3">
                        <li class="tab col s3"><a class="white-text" href="#test-swipe-1">Skills</a></li>
                        <li class="tab col s3"><a class="white-text" href="#test-swipe-2">Experience</a></li>
                        <li class="tab col s3"><a class="white-text" href="#test-swipe-3">Education</a></li>
                    </ul>
                </div>
                <div id="test-swipe-1" class="col s5 blue-grey darken-2 z-depth-1 offset-s1" style={{height: 320}}>
                    <ul>
                        <li style={{fontWeight: 500}}>Java</li>
                        <li>Backend development both on a large, corporate domain
                            and on personal projects</li>
                    </ul>
                    <ul>
                        <li style={{fontWeight: 500}}>Spring / Springboot</li>
                        <li></li>
                    </ul>
                    <ul>
                        <li style={{fontWeight: 500}}>React / Node</li>
                        <li></li>
                    </ul>
                    <ul>
                        <li style={{fontWeight: 500}}>Git / Github / Gitlab / Gerrit</li>
                        <li></li>
                    </ul>
                    <ul>
                        <li style={{fontWeight: 500}}>HTML / CSS / Javascript</li>
                        <li></li>
                    </ul>
                    <ul>
                        <li style={{fontWeight: 500}}>SQL / Postgres</li>
                        <li></li>
                    </ul>
                    <ul>
                        <li style={{fontWeight: 500}}>AWS / Heroku</li>
                        <li></li>
                    </ul>
                </div>
                <div id="test-swipe-2" class="col s5 blue-grey darken-2 z-depth-1 offset-s1" style={{height: 320}}>
                    <ul>
                        <li style={{fontWeight: 500}}>Application Server Developer</li>
                        <li>2018 - Present</li>
                    </ul>
                    <ul>
                        <li style={{fontWeight: 500}}>IT Support / Dashboard Development</li>
                        <li>2017 - 2018</li>
                    </ul>
                    <ul>
                        <li style={{fontWeight: 500}}>Personal Projects</li>
                        <li>2017 - Present</li>
                    </ul>
                </div>
                <div id="test-swipe-3" class="col s5 blue-grey darken-2 z-depth-1 offset-s1" style={{height: 320}}>
                    <ul>
                        <li style={{fontWeight: 500}}>AWS Certification - Developer / Cloud Practitioner</li>
                        <li>2021</li>
                    </ul>
                    <ul>
                        <li style={{fontWeight: 500}}>MSc Computing - Distinction</li>
                        <li>2017 - 2019 - Manchester Metropolitan University</li>
                    </ul>
                    <ul>
                        <li style={{fontWeight: 500}}>BA(hons) English - 2:1</li>
                        <li>tbc - tbc - Manchester Metropolitan University</li>
                    </ul>
                    <ul>
                        <li style={{fontWeight: 500}}>Agile with Scrum</li>
                        <li>tbc - QA</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
}



export default Aboutme;