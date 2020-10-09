import React from 'react'

class About extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="section">
        <h1 className="title">About Me</h1>
          <div className="content">
          <div className="b">
            <p>Hey There</p>
          </div>
          </div>
      </div>
    );
  }
}

export default About
