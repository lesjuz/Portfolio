import React, { Component } from 'react';

class About extends Component {
  render() {

    return (
        <section className="about" data-section="about">
            <div className="narrow-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row row-bottom-padded-sm" >
                            <div className="col-md-12">
                                <div className="about-desc">
                                    <span className="heading-meta">About Us</span>
                                    <h2 className="heading">Who Am I?</h2>
                                    <p><strong>Hi I'm Jules Uwineza</strong> I am passionate and enthusiast about technology.
                                        Computer is my hobby,I really like it not only as a tool but also the way it makes
                                        our life so easier and how we use it to solve most of our problems.</p>
                                    <p>I have more than five years of experience as a technical support freelancer. Most recently, I led the development of public institution
                                        platforms. I believe that the shy is not a limit, I always digging to learn new things and keep on the date
                                    with new technology.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3" >
                                <div className="services color-1">
                                    <span className="icon2"><i className="icon-bulb"></i></span>
                                    <h3>Help Desk</h3>
                                </div>
                            </div>
                            <div className="col-md-3" >
                                <div className="services color-2">
                                    <span className="icon2"><i className="icon-globe-outline"></i></span>
                                    <h3>Web Design</h3>
                                </div>
                            </div>
                            <div className="col-md-3" >
                                <div className="services color-3">
                                    <span className="icon2"><i className="icon-data"></i></span>
                                    <h3>Software</h3>
                                </div>
                            </div>
                            <div className="col-md-3" >
                                <div className="services color-4">
                                    <span className="icon2"><i className="icon-phone3"></i></span>
                                    <h3>Application</h3>
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

export default About;
