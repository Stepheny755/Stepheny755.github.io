import React from 'react'
import experiences from '../data/experience.json'

class Experience extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="section">
        <h1 className="title">Experience</h1>
        <div className="content">
          <ul>
            {experiences.map(x => {
              return (
                <div className="b accordion">
                  <li key={x.id}>
                    <h4>{x.team} {x.title} - {x.name}</h4>
                    <h4 className="exp_range">{x.start_year} - {x.end_year}</h4>
                    <p>{x.description}</p>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Experience
