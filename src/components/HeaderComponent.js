import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state={
      isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return(
      <div>
        <Navbar className="navbar-style" fixed="top" expand="lg">
          <NavbarBrand className="navbar-style">
            <img src="assets/images/profileprojectile.png" height="55" width="55" alt=""/>
            Projectile
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="mr-auto" navbar>
              </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
