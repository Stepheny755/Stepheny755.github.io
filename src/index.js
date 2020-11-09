import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import './style/index.css'

//import NavBar from './layouts/nav'
import { NaviBar } from './layouts/navbar'
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
      <React.Fragment>
        <NaviBar />
        <Landing />
        <div id = "main">
          <About />
          <Education/>
          <Experience/>
          <Projects />
        </div>
      </React.Fragment>
    );
  }
}


ReactDOM.render(<Main />,document.getElementById('rootelement'));
