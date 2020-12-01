import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Routes from '../Routes';
import { LinkContainer } from 'react-router-bootstrap';


function Navegacao() {
    return (
        <div className="App container">
            <Navbar fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Scratch</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <LinkContainer to="/paciente">
                            <NavItem>Paciente</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/medico">
                            <NavItem>Medico</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Routes/>
        </div>
    );
}

export default Navegacao;