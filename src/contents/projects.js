import React from 'react'
import projects from '../data/projects.json'

class Projects extends React.Component{
  constructor(props){
    super(props);
  }
  render_data(x){
    return (
      <div>
        <li key={x.id}>
          <h4>{x.headline}</h4>
          <p>{x.description}</p>
        </li>
      </div>
    );
  }
  render(){
    return(
      <div className="section">
        <h1 className="title">Projects</h1>
        <div className="content">
          <ul>
            {projects.map(x =>
              <Card
                title = {<h4>{x.name} - {x.headline} </h4>}
                content = {this.render_data(x)}
              />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

class Card extends React.Component{
  constructor(props){
    super(props);
    this.state={
      expanded: false,
    }
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }
  toggleExpanded(){
    this.setState({ expanded:!this.state.expanded, });
  }
  render(){
    return (
      <div className="b accordion" onClick={this.toggleExpanded}>
        {this.props.title}
        {this.state.expanded?(
          <div>
            {this.props.content}
          </div>
        ):null}
      </div>
    );
  }
}
export default Projects
