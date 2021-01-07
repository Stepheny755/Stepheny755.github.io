import React, { useState  } from 'react'

class Theme extends React.Component{
  constructor(props){
    super(props);
    this.state={
      theme: 0,
    }
  }

  toggleState(){
    this.setState({
      theme:(this.state.theme+1)%3
    });
    ()=>this.props.setTheme(this.getState());
  }

  getState(){
    switch(this.state.theme){
      case 0:
        return 'light';
      case 1:
        return 'dark';
      case 2:
        return 'accessibility';
      default:
        return 'light';
    }
  }

  render(){
    return(
      <div className={`${this.getState()}`} onClick={()=>this.toggleState()}>
        <p>PressHere</p>
      </div>
    );
  }
}

export default Theme
