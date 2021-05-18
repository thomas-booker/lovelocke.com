import react, { Component } from 'react'


class Contact extends Component {

    render() {
        return (
            <div class="container white-text z-depth-2" style={{padding: 1}}>
                <div class="row">
                    <div class="col s12">
                        <h2>Contact Me</h2>
                    </div>
                </div>

                            <div class="row blue-grey darken-3 z-depth-2" style={{margin: 5}}>
                <form class="col s12">
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
                    <label for="password">Password</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                    <input id="email" type="email" class="validate" />
                    <label for="email">Email</label>
                    </div>
                </div>
                <a class="waves-effect blue-grey darken-2 btn" style={{marginBottom: 10}}>Send</a>
                </form>
                
            </div>
            </div>
        )
    }
}

export default Contact;