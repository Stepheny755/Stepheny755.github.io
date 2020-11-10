import React from 'react'

class About extends React.Component{
  render(){
    return(
      <div className="section">
        <h1 className="title">About Me</h1>
          <div className="content">
            <ul>
              <div className="b">
                <p>
                Hi! My name is Stephen Yang. I love figuring out how things work, and what I can do to develop sustainable, enduring systems.
                </p>
                <p>
                Currently, I am studying Computer Engineering at the University of Toronto, hoping to specialize in Electromagnetics, Control Systems or Mechatronics.
                </p>
                <p>
                When I have time, I like to tinker with hardware, apply to hackathons, shoot photos, or play a round of golf. I also enjoy reading, cooking dishes with rice, and finding new music.
                </p>
                <p>
                Please feel free to download my resume or check out my github.
                </p>
              </div>
            </ul>
          </div>
      </div>
    );
  }
}

export default About
