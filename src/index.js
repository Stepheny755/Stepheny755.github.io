import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './assets/index.css'

import NavBar from './layouts/nav'
import Footer from './layouts/footer'

import About from './contents/about'
import Education from './contents/education'
import Experience from './contents/experience'
import Projects from './contents/projects'
import Landing from './contents/landing'

class Main extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    return(
      <div id = "main">
        <Landing />
        <About />
        <Education/>
        <Experience/>
        <Projects />
      </div>
      /*
      <Router>
        <div className="app">
          <Route exact path="/">
          </Route>
          <Route exact path="/about">
            <Footer />
          </Route>
          <Route exact path="/education">
            <Education />
          </Route>
          <Route exact path="/experience">
            <Footer />
          </Route>
          <Route exact path="/skills">
            <Footer />
          </Route>
          <Footer />
        </div>
      </Router>
      */
    );
  }
}


ReactDOM.render(<Main />,document.getElementById('root'));
