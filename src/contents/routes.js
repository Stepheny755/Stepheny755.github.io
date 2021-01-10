import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

import Header from './header'
import Footer from './footer'

import About from './about'
import Education from './education'
import Experience from './experience'
import Projects from './projects'
import Landing from './landing'
import Blog from './blog'
import Notes from './notes'

class Routes extends React.Component{

  constructor(props){
    super(props);
    console.log(props);
  }

  mainPage(){
    return(
      <React.Fragment>
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

  render(){
    return(
    <Router>
      <Header theme={this.props.theme} onClick={this.props.onClick} />
      <Switch>
        <Route path = "/blog">
          <div className = {`App ${this.props.theme}`}>
          <Blog />
          </div>
        </Route>
        <Route path = "/notes">
          <div className = {`App ${this.props.theme}`}>
          <Notes />
          </div>
        </Route>
        <Route path="/about">
          <div className = {`App ${this.props.theme}`}>
          {this.mainPage()}
          </div>
        </Route>
        <Route path="/">
          <div className = {`App ${this.props.theme}`}>
          </div>
        </Route>
      </Switch>
      <Footer theme={this.props.theme}/>
    </Router>
  );
  }
}

export default Routes
