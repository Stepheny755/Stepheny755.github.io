import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Navbar className={`${this.props.theme}`} sticky="top">
          <Navbar.Brand href="/">SY</Navbar.Brand>
          <Nav.Link href="blog">blog</Nav.Link>
          <Nav.Link href="notes">notes</Nav.Link>
          <Nav.Link href="about">about</Nav.Link>
          <button className="b" onClick={this.props.onClick}>Press Here</button>
      </Navbar>
    );
  }
}

export default Header
