import M from 'materialize-css'

function Aboutme() {
    M.AutoInit();

    return (
        <div className="container  white-text">
            <div className="row">
                <div className="col s8">
                    <h2>About me text in-depth</h2>
                    <p>Placement text, etc etc etc</p>
                </div>
                <div className="col s4">
                    <h2>Small image placement</h2>
                </div>
                <div className="col s8">
                <div class="row">
    <div class="col s12 blue-grey darken-4">
    <ul id="tabs-swipe-demo" class="tabs tabs-fixed-width tab-demo z-depth-1 blue-grey darken-3">
    <li class="tab col s3"><a class="white-text" href="#test-swipe-1">Skills</a></li>
    <li class="tab col s3"><a class="white-text" href="#test-swipe-2">Experience</a></li>
    <li class="tab col s3"><a class="white-text" href="#test-swipe-3">Education</a></li>
  </ul>
    </div>
    <div id="test-swipe-1" class="col s12 orange z-depth-1">
        <ul>
            <li>Skill 1</li>
            <li>Skill 2</li>
        </ul>
    </div>
  <div id="test-swipe-2" class="col s12 red z-depth-1">
  <ul>
            <li>Exp 1</li>
            <li>Exp 2</li>
        </ul>
  </div>
  <div id="test-swipe-3" class="col s12 orange z-depth-1">
  <ul>
            <li>Edu 1</li>
            <li>Edu 2</li>
        </ul>
  </div>
  </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme;