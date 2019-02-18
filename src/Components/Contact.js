import React, { Component } from 'react';

class Contact extends Component {
  render() {

    return (
        <section className="contact" data-section="contact">
            <div className="narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                        <span className="heading-meta">Get in Touch</span>
                        <h2 className="heading">Contact</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="feature feature-sm"
                             data-animate-effect="fadeInLeft">
                            <div className="icon">
                                <i className="icon-globe-outline"></i>
                            </div>
                            <div className="text">
                                <p>lesjuz01@gmail.com</p>
                            </div>
                        </div>

                        <div className="feature feature-sm">
                            <div className="icon">
                                <i className="icon-map"></i>
                            </div>
                            <div className="text">
                                <p>12 KN 187 St, Kigali, Rwanda</p>
                            </div>
                        </div>

                        <div className="feature feature-sm">
                            <div className="icon">
                                <i className="icon-phone"></i>
                            </div>
                            <div className="text">
                                <p><a href="tel://">+250 785560490</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-md-push-1">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1 col-md-pull-1">
                                <form action="">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Subject"/>
                                    </div>
                                    <div className="form-group">
                                        <textarea name="" id="message" cols="30" rows="7" className="form-control"
                                                  placeholder="Message"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-primary btn-send-message"
                                               value="Send Message"/>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Contact;
