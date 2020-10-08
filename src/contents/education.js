import React from 'react';
import education from '../data/education.json';

class Education extends React.Component{
  render_data(x){
    return (
      <div className="b accordion">
        <li key={x.id}>
          <h3 className="edu_school">{x.school}</h3>
          <h3 className="edu_program">{x.program}</h3>
          <h4 className="edu_range">{x.start_month} {x.start_year} - {x.end_month} {x.end_year}</h4>
          <p>{x.relevant_coursework}</p>
        </li>
      </div>
    );
  }
  render(){
    return(
      <div className="section">
        <h1 className="title">Education</h1>
        <div className="content">
          <ul>
            {education.map(x => this.render_data(x) )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Education
