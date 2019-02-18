import React, { Component } from 'react';
import {  NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

class Aside extends Component {
  render() {


    return (

        <aside id="aside" role="complementary" className="border js-fullheight">
            <div className="text-center">
                <div className="author-img" style={{backgroundImage: 'url('+"images/me.jpg"+')'}}></div>
                <h1 id="logo"><a href="index.html">Jules Uwineza</a></h1>
                <span className="position"><a href="#">Fullstack developer</a></span>
            </div>
            <nav id="main-menu" role="navigation" className="navbar">
                <div id="navbar" className="collapse">
                    <ul>
                        <li><NavLink exact to="/" data-nav-section="home">Home</NavLink></li>
                        <li><NavLink to="/about" data-nav-section="about">About</NavLink></li>
                        <li><NavLink to="/skills" data-nav-section="skills">Skills</NavLink></li>
                        <li><NavLink to="/experience" data-nav-section="experience">Experience</NavLink></li>
                        <li><NavLink to="/work" data-nav-section="work">Work</NavLink></li>
                        <li><NavLink to="/contact" data-nav-section="contact">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>

            <div className="footer">

            <ul>
                <li><a href="https://www.facebook.com/jules.uwineza" target="blank"><i className="icon-facebook2"></i></a></li>
                <li><a href="https://twitter.com/lesjuz01" target="blank"><i className="icon-twitter2"></i></a></li>
                <li><a href="https://www.instagram.com/u_jules" target="blank"><i className="icon-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/in/uwijules " target="blank"><i className="icon-linkedin2"></i></a></li>
            </ul>
        </div>

        </aside>
    );
  }

}

export default Aside;
