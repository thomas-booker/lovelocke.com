import react, { Component } from 'react'


class Footer extends Component {
    render() {
        return (
            <footer class="page-footer blue-grey darken-4 white-text" style={{position: 'absolute', width: "100%", marginTop: 10}}>
            <div class="container blue-grey darken-4 z-depth-3">
                <div class="row">
                    <div class="col s12">
                    <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">My Github</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">My Photography</a></li>
                </ul>
              </div>
                    </div>
                </div>
            </div>
            </footer>
        )
    }
}

export default Footer;