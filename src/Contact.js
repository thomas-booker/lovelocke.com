import react, { Component } from 'react'


class Contact extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div class="container white-text" style={{padding: 1}}>
                <div class="row ">
                    <div class="col s6  offset-s4 ">
                        <h2>Contact Me</h2>
                    </div>
                </div>

                            <div class="row " style={{margin: 5}}>
                <form class="col s4 blue-grey darken-3 z-depth-2 offset-s4">
                <div class="row">
                    <div class="input-field col s6">
                    <input id="first_name" type="text" class="validate" />
                    <label for="first_name">First Name</label>
                    </div>
                    <div class="input-field col s6">
                    <input id="last_name" type="text" class="validate" />
                    <label for="last_name">Last Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                    <input id="password" type="password" class="validate" />
                    <label for="password">Your Email Address</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12 ">
                    <input id="email" type="email" class="validate" />
                    <label for="email">Message</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6 offset-s3">
                <a class="waves-effect blue-grey darken-2 btn offset-s3" style={{marginBottom: 10}}>Send</a>

                </div>
                </div>
                </form>
            </div>
            </div>
        )
    }
}

export default Contact;