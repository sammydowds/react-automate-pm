import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
  Button, 
  Media
} from 'reactstrap';
import logo from '../shared/default.svg'; 

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
        <Navbar color="light" dark className="shadow-sm bg-dark" fixed="top" expand="lg">
          <NavbarBrand className="mr-auto lead" href="/">
              <img className="rotate" src="assets/images/profile.png" height="50" width="50" alt="Ristorante Con Fusion"/>
              &nbsp; Projectile
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="mr-auto" navbar>
              </Nav>
              <NavbarText>
                <Button outline>Log In</Button>
              </NavbarText>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
