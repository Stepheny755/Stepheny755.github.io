import React from 'react'
import projects from '../data/projects.json'

import Card from './card'

class Projects extends React.Component{
  constructor(props){
    super(props);
  }
  render_data(x){
    return (
      <div>
        <li key={x.id}>
          <p>{x.description}</p>
        </li>
      </div>
    );
  }
  render(){
    return(
      <div className="section">
        <h1 className="title">Projects</h1>
        <ul className="content">
          {projects.map(x =>
            <Card
              title = {<h4>{x.name} - {x.headline} </h4>}
              content = {this.render_data(x)}
            />
          )}
        </ul>
      </div>
    );
  }
}
export default Projects
