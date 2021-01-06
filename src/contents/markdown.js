import React from 'react'
import ReactMarkdown from 'react-markdown'

//props.data should contain imported MD file

class MDBase extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      markdown: ''
    };
  }
  componentWillMount(){
    fetch(this.props.data).then(res=>res.text()).then(text=>this.setState({ markdown: text }))
  }
  render(){
    const { markdown } = this.state;
    return(
      <div className = "md">
        <ReactMarkdown source = {markdown}/>
      </div>
    );
  }
}

export default MDBase
