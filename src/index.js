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
      <div>
        <Landing />
        <div id = "main">
          <About />
          <Education/>
          <Experience/>
          <Projects />
        </div>
      </div>
    );
  }
}


ReactDOM.render(<Main />,document.getElementById('root'));
