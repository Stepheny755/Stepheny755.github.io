import React from 'react'
import experiences from '../data/experience.json'

class Experience extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h1>Experience</h1>
        <ul>
          {experiences.map(x => {
            return (
              <li>
                <h4>{x.team} {x.title} - {x.name}</h4>
                <h4 className="exp_range">{x.start_year} - {x.end_year}</h4>
                <p>{x.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Experience
