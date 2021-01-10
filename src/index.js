import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

import './style/themes.scss'
import './style/index.scss'

import Routes from './contents/routes'

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

  render(){
    console.log(this.getTheme())
    return(
    <div>
    <Routes theme={this.getTheme()} onClick={()=>this.toggleTheme()}/>
    </div>
  );
  }
}

ReactDOM.render(<Main/>,document.getElementById('rootelement'));
