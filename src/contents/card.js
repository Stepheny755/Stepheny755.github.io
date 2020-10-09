import React from 'react'

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

export default Card
