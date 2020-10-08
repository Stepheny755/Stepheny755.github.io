import React from 'react'

class About extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="section">
        <h1 className="title">About Me</h1>
          <div className="b content">
            <p>Hey There</p>
          </div>
      </div>
    );
  }
}

export default About
