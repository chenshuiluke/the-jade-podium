import React, { Component } from 'react';
//import { Navbar } from 'react-bulma-components';
import { Container, Nav, NavLink } from 'styled-bootstrap-components';
import Link from 'next/link';
import styled from 'styled-components';

const BlackNavLink = styled(NavLink)`
  color: black;
  font-weight: 600;
  &:hover{
      color: #0693e3;
  }
`
export default class NavBar extends Component{
    render(){
        return (
            <Container fluid>
            <Nav>
                <Link href="/index" passHref>
                    <BlackNavLink>
                            The JADE Podium
                    </BlackNavLink>
                </Link>
                <Link href="/about" passHref>
                    <BlackNavLink href="/about">
                        About
                    </BlackNavLink>
                </Link>
            </Nav>
            </Container>

        );
    }
}
