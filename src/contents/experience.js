import React from 'react'
import experiences from '../data/experience.json'

import Card from './card'

class Experience extends React.Component{
  constructor(props){
    super(props);
  }
  render_data(x){
    return(
      <div>
        <li key={x.id}>
          <h4 className="exp_range">{x.start_year} - {x.end_year}</h4>
          <p>{x.description}</p>
        </li>
      </div>
    );
  }
  render(){
    return(
      <div className="section">
        <h1 className="title">Experience</h1>
        <ul className="content">
          {experiences.map(x =>
            <Card
              title = {<h4>{x.team} {x.title} - {x.name}</h4>}
              content = {this.render_data(x)}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default Experience
