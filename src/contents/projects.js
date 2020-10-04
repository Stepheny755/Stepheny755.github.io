import React from 'react'
import projects from '../data/projects.json'

class Projects extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h1>Projects</h1>
        <ul>
          {projects.map(x => {
            return (
              <li>
                <h4>{x.name} - {x.headline}</h4>
                <p>{x.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Projects
