import React, { Component } from 'react';

class Work extends Component {
  render() {

    return (
        <section className="work" data-section="work">
            <div className="narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 ">
                        <span className="heading-meta">My Work</span>
                        <h2 className="heading animate-box">Recent Work</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6" >
                        <div className="project" style={{backgroundImage: 'url('+"images/img-1.jpg"+')'}}>
                            <div className="desc">
                                <div className="con">
                                    <h3>No official Work available</h3>

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

export default Work;
