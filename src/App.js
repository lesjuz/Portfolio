import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Aside from "./Components/Aside";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Home from "./Components/Home";

class App extends Component {
  render() {
    return (
        <Router>
      <div className="App">
          <div id="page">
              <div className="container-wrap">
                  <a href="#" className="js-nav-toggle nav-toggle" data-toggle="collapse"
                     data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
                  <Aside/>
                  <div id="main">
                      <Route exact path="/" component={Home} />
                      <Route path="/about" component={About} />
                      <Route path="/skills" component={Skills} />
                      <Route path="/experience" component={Experience} />
                      <Route path="/work" component={Work} />
                      <Route path="/contact" component={Contact} />

                  </div>
              </div>
          </div>

      </div>
      </Router>
    );
  }
}

export default App;
