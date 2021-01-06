import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

import './style/index.css'

//import NavBar from './layouts/nav'
//import { NaviBar } from './layouts/navbar'
//import Footer from './layouts/footer'

import About from './contents/about'
import Education from './contents/education'
import Experience from './contents/experience'
import Projects from './contents/projects'
import Landing from './contents/landing'
import Blog from './contents/blog'


class Main extends React.Component{
  mainPage(){
    return(
      <React.Fragment>
        <Landing />
        <div id = "main">
          <About />
          <Education/>
          <Experience/>
          <Projects />
          <Blog />
        </div>
      </React.Fragment>
    );
  }

  /*
  constructor(props){
    super(props);
  }
  */
  render(){
    return(
    <Router>
      <Switch>
        <Route path = "/blog">
          <Blog />
        </Route>
        <Route path="/">
          {this.mainPage()}
        </Route>
      </Switch>
    </Router>
  );
  }
}

ReactDOM.render(<Main/>,document.getElementById('rootelement'));
