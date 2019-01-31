import React, { Component } from 'react'
import {
  Nav,
  Navbar as RBNavbar,
  NavItem
} from 'react-bootstrap'

class Navbar extends Component {
  handleClick = (e) => {
    this.props.history.push(`/page${e.target.id}`)
  }

  render () {
    return (
      <RBNavbar inverse collapseOnSelect>
        <RBNavbar.Header>
          <RBNavbar.Brand>
            React App
          </RBNavbar.Brand>
          <RBNavbar.Toggle />
        </RBNavbar.Header>
        <RBNavbar.Collapse>
          <Nav>
            <NavItem eventKey={1} id={1} href='#' onClick={this.handleClick}>Page1</NavItem>
            <NavItem eventKey={2} id={2} href='#' onClick={this.handleClick}>Page2</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={3} id={3} href='#' onClick={this.handleClick}>Page3</NavItem>
          </Nav>
        </RBNavbar.Collapse>
      </RBNavbar>
    )
  }
}

export default Navbar
