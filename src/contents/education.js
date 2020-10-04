import React from 'react';
import education from '../data/education.json';

class Education extends React.Component{

  render(){
    return(
      <div>
        <h1>Education</h1>
          <ul>
            {education.map(x => {
              return (
                <li>
                  <h3 className="edu_school">{x.school}</h3>
                  <h3 className="edu_program">{x.program}</h3>
                  <h4 className="edu_range">{x.start_month} {x.start_year} - {x.end_month} {x.end_year}</h4>
                  <p>{x.relevant_coursework}</p>
                </li>
              );
            })}
          </ul>
      </div>
    );
  }
}

export default Education
