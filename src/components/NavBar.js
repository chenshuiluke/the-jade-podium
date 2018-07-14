import React, { Component } from 'react';
import { Navbar } from 'react-bulma-components';
export default class NavBar extends Component{
    render(){
        return (
            <div>
                <Navbar>
                <Navbar.Brand>
                    <Navbar.Item href="#">
                        <a href="/">JADE Podium</a>
                    </Navbar.Item>
                    <Navbar.Burger/>
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Container>
                        <Navbar.Item dropdown hoverable>
                            <Navbar.Link>
                                About
                            </Navbar.Link>
                            <Navbar.Dropdown boxed>
                                <Navbar.Item href="#">
                                    Vision
                                </Navbar.Item>
                            </Navbar.Dropdown>
                        </Navbar.Item>
                        {/* <Navbar.Item href="#">
                            Second
                        </Navbar.Item> */}
                    </Navbar.Container>
                    <Navbar.Container position="end">
                        <Navbar.Item dropdown hoverable>
                            <Navbar.Link>
                                Funtions
                            </Navbar.Link>
                            <Navbar.Dropdown right boxed>
                                <Navbar.Item href="#">
                                    Placeholder
                                </Navbar.Item>
                            </Navbar.Dropdown>
                        </Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
                </Navbar>
            </div>
        );
    }
}