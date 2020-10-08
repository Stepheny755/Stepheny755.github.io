import React from 'react'
import Typewriter from 'typewriter-effect';


class Landing extends React.Component{
  render(){
    return(
      <div id="landing">
        <div id="landing-focus">
          <div id="landing-text">
            <h1>
              Hey! I'm&nbsp;
            </h1>
            <h1>
              <Typewriter
                options={{
                  strings: ['stephen','an engineer','a student','a maker','a photographer','an avid hiker','a snowboarder','a tea drinker'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,
                  pauseFor: 100,
                  delay: 55,
                }}
              />
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing
