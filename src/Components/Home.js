import React, { Component } from 'react';

class Home extends Component {
    render() {

        return (
            <section id="hero" className="js-fullheight" data-section="home">
                <div className="js-fullheight" >
                    <div className="cover" style={{backgroundImage: 'url('+"images/blog-4.jpg"+')'}}>

                        <div className="overlay"></div>
                        <div className="container-fluid">
                            <div className="row">
                                <div
                                    className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                    <div className="slider-text-inner js-fullheight">
                                        <div className="desc">
                                            <h1>Hi! <br></br>I'm Jules</h1>
                                            <h2>Welcome to my website! I'm a developer, designer.</h2>
                                            <p><a className="btn btn-primary btn-learn">Download CV <i
                                                className="icon-download4"></i></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>




                </div>
            </section>
        );
    }
}

export default Home;