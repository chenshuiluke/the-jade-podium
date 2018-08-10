import React, { Component } from 'react';
//import { Navbar } from 'react-bulma-components';
import { Container, Nav, NavLink } from 'styled-bootstrap-components';
import Link from 'next/link';
export default class NavBar extends Component{
    render(){
        return (
            <Container fluid>
            <Nav>
                <Link href="/index">
                    <NavLink>
                        The JADE Podium
                    </NavLink>
                </Link>
                <Link href="/about">
                    <NavLink href="/about">
                        About
                    </NavLink>
                </Link>
            </Nav>
            </Container>

        );
    }
}