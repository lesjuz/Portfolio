import React,{Component} from 'react';

class Skills extends Component{

    render(){
        return(
            <section className="skills" data-section="skills">
                <div className="narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                            <span className="heading-meta">My Specialty</span>
                            <h2 className="heading">My Skills</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p>The undergraduate curriculum in Computer Science combined with web development trainings has
                                given me a solid foundation in the tools and
                                processes involved in the successful development of web applications. </p>
                        </div>
                        <div className="col-md-6" >
                            <div className="progress-wrap">
                                <h3>HTML5</h3>
                                <div className="progress">
                                    <div className="progress-bar color-1" role="progressbar" aria-valuenow="95"
                                         aria-valuemin="0" aria-valuemax="100" style={{width:"95%"}}>
                                        <span>95%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="progress-wrap">
                                <h3>CSS</h3>
                                <div className="progress">
                                    <div className="progress-bar color-2" role="progressbar" aria-valuenow="70"
                                         aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                                        <span>70%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" >
                            <div className="progress-wrap">
                                <h3>JavaScript</h3>
                                <div className="progress">
                                    <div className="progress-bar color-3" role="progressbar" aria-valuenow="75"
                                         aria-valuemin="0" aria-valuemax="100" style={{width:"75%"}}>
                                        <span>75%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="progress-wrap">
                                <h3>Agile</h3>
                                <div className="progress">
                                    <div className="progress-bar color-4" role="progressbar" aria-valuenow="90"
                                         aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}>
                                        <span>90%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="progress-wrap">
                                <h3>MongoDB</h3>
                                <div className="progress">
                                    <div className="progress-bar color-5" role="progressbar" aria-valuenow="85"
                                         aria-valuemin="0" aria-valuemax="100" style={{width:"85%"}}>
                                        <span>85%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" >
                            <div className="progress-wrap">
                                <h3>SEO</h3>
                                <div className="progress">
                                    <div className="progress-bar color-6" role="progressbar" aria-valuenow="60"
                                         aria-valuemin="0" aria-valuemax="100" style={{width:"60%"}}>
                                        <span>60%</span>
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
export default Skills;