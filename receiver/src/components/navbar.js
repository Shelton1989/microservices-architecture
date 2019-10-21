import React, { Component, useState } from 'react';

import { Navbar, Button, Form } from 'react-bootstrap';

const logoAura = 'https://aura.services/images/logo-white.svg';

const NavHeader = (props) => {

    return (
        <Navbar className="justify-content-between" bg="dark" expand="lg">
            <Navbar.Brand href="#">
                <img src={logoAura} className="logo" alt="logo" />
            </Navbar.Brand>
            <Form>
                <Button onClick={props.handleClick} variant="outline-light" >Refresh</Button>
            </Form>
        </Navbar>
    )
}

export default NavHeader;
