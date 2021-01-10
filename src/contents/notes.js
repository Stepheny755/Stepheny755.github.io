import React from 'react'
import listReactFiles from 'list-react-files'

import MDBase from './markdown'


class Notes extends React.Component{
  constructor(props){
    super(props)
    console.log(process.env.REACT_APP_PUBLIC_URL)
    listReactFiles(process.env.REACT_APP_PUBLIC_URL+"/notes").then(files => console.log(files))

  }
  render(){
    return(
      //<MDBase data = {Lec_7notes}/>
      <div>
      </div>
    );
  }
}

export default Notes
