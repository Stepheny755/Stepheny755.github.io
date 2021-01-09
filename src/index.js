import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

import './style/themes.scss'
import './style/index.scss'

//import NavBar from './layouts/nav'
//import { NaviBar } from './layouts/navbar'
//import Footer from './layouts/footer'

import Header from './contents/header'
import About from './contents/about'
import Education from './contents/education'
import Experience from './contents/experience'
import Projects from './contents/projects'
import Landing from './contents/landing'
import Blog from './contents/blog'
import Notes from './contents/notes'

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={
      theme: 0,
    }
  }

  toggleTheme(){
    this.setState({
      theme:(this.state.theme+1)%2
    });
  }

  getTheme(){
    switch(this.state.theme){
      case 0:
        return 'light';
      case 1:
        return 'dark';
      default:
        return 'light';
    }
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
      <Header theme={this.getTheme()} onClick={() => this.toggleTheme()} />
      <Switch>
        <Route path = "/blog">
          <div className = {`App ${this.getTheme()}`}>
          <Blog />
          </div>
        </Route>
        <Route path = "/notes">
          <div className = {`App ${this.getTheme()}`}>
          <Notes />
          </div>
        </Route>
        <Route path="/about">
          <div className = {`App ${this.getTheme()}`}>
          {this.mainPage()}
          </div>
        </Route>
        <Route path="/">
          <div className = {`App ${this.getTheme()}`}>
          </div>
        </Route>
      </Switch>
    </Router>
  );
  }
}

ReactDOM.render(<Main/>,document.getElementById('rootelement'));
