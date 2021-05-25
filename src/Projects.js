import react, { Component } from 'react'


class Projects extends Component {

    render() {
        return (
            <div class="container white-text z-depth-2">
                <div class="row">
                    <div class="col s12">
                        <h2>Latest projects</h2>
                        <p>List of current projects, linking to Github</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col s4">
                        <div class="card medium blue-grey darken-3">
                            <div class="card-image">
                                <img src="https://getwallpapers.com/wallpaper/full/f/2/2/1082602-cool-really-cool-backgrounds-1920x1080-desktop.jpg" />
                                <span class="card-title orange darken-4 z-depth-5" style={{fontSize: 20, fontWeight: 600, height: 40, padding: 5}}>Project 1</span>
                            </div>
                            <div class="card-content">
                                <p style={{fontWeight: 600}}>Discord Bot</p>
                                <p>Created using Java, Springboot and Thymeleaf, 
                                    using the JDA framework
                                </p>
                            </div>
                            <div class="card-action">
                                <a href="https://github.com/thomas-booker/spiritofnirn-discord-bot" target="_blank">See on Github</a>
                            </div>
                        </div>
                    </div>
                    <div class="col s4">
                        <div class="card medium blue-grey darken-3">
                            <div class="card-image">
                                <img src="https://i.pinimg.com/originals/ab/65/25/ab6525b299477019027ddbd33a90c4b7.jpg" />
                                <span class="card-title orange darken-4 z-depth-5" style={{fontSize: 20, fontWeight: 600, height: 40, padding: 5}}>Project 2</span>
                            </div>
                            <div class="card-content">
                                <p style={{fontWeight: 600}}>Currency Exchange</p>
                                <p>Springboot application with a Thymeleaf website,
                                    REST controller, connecting to an exchange API
                                </p>
                            </div>
                            <div class="card-action">
                                <a href="https://github.com/thomas-booker/currencyexchange" target="_blank">See on Github</a>
                            </div>
                        </div>
                    </div>
                    <div class="col s4">
                        <div class="card medium blue-grey darken-3">
                            <div class="card-image">
                                <img src="https://cdn.suwalls.com/wallpapers/typography/tech-41219-1920x1080.jpg" />
                                <span class="card-title orange darken-4 z-depth-5" style={{fontSize: 20, fontWeight: 600, height: 40, padding: 5}}>Project 3</span>
                            </div>
                            <div class="card-content">
                                <p style={{fontWeight: 600}}>Lovelocke.com</p>
                                <p>The source for this website, created in React and 
                                    using the Materialize CSS framework
                                </p>
                            </div>
                            <div class="card-action">
                                <a href="https://github.com/thomas-booker/lovelocke.com" target="_blank">See on Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;