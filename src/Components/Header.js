import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Navbar.Brand>BookFinder</Navbar.Brand>
          </Navbar>
        );
    }
}

export default Header;
