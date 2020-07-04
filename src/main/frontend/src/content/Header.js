import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';

function Header () {
    return (
        <Navbar style={headerStyle}>
            <Link to="/" style={headerTextStyle}><NavbarBrand>Building calculators online</NavbarBrand></Link>
        </Navbar>
    );
}

export default Header;

const headerTextStyle = {
    margin: 'auto',
    textDecoration: 'none',
    color: 'white',
}

const headerStyle = {
    textAlign: 'center',
    backgroundColor: '#8cb4af'
}