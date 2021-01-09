import React from 'react'
import listReactFiles from 'list-react-files'

import MDBase from './markdown'

import Lec_7notes from './public/data/notes/Lec_7.md'


class Notes extends React.Component{
  constructor(props){
    super(props)
    listReactFiles("../data/notes").then(files => console.log(files))

  }
  render(){
    return(
      <MDBase data = {Lec_7notes}/>
    );
  }
}

export default Notes
