import React,{Component} from 'react';

class Experience extends Component{

    render(){

        return(
            <section className="experience" data-section="experience">
                <div className="narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                             data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Experience</span>
                            <h2 className="heading">Work Experience</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="timeline-centered">

                                <article className="timeline-entry" >
                                    <div className="timeline-entry-inner">

                                        <div className="timeline-icon color-1">
                                            <i className="icon-pen2"></i>
                                        </div>

                                        <div className="timeline-label">
                                            <h2>Freelance technical support  <span> 2012 – up to now </span></h2>
                                            <p> Diagnose, troubleshoot and resolve a range of software, hardware and connectivity issues , Excel in asking probing questions and researching, analyzing and rectifying problems
                                                and Software development ( front-end and back-end development) </p>
                                        </div>
                                    </div>
                                </article>

                                <article className="timeline-entry" >
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-3">
                                            <i className="icon-pen2"></i>
                                        </div>
                                        <div className="timeline-label">
                                            <h2>Andela Learning Community (ALC) Rwanda <span> Sept 2018- Feb 2019</span></h2>
                                            <p>The Andela Learning Community is a 5-month program in Rwanda to empower
                                                people with technical leadership skills in software development.
                                                The curriculum cover Web development using JavaScript, while concurrentl
                                                y impacting leadership and team skills.</p>
                                        </div>
                                    </div>
                                </article>


                                <article className="timeline-entry">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-2">
                                            <i className="icon-pen2"></i>
                                        </div>
                                        <div className="timeline-label">
                                            <h2>Web developer Intern Go Ltd
                                                <span>June - August 2015 </span></h2>
                                            <p> Analyse the client needs, design the site map, design website mock-up, Web application front- end and back-end development </p>
                                        </div>
                                    </div>
                                </article>


                                <article className="timeline-entry begin">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-none">
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );

}
}
export default Experience;