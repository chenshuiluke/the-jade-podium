import React, { Component } from 'react';
import { Navbar } from 'react-bulma-components';
import { subscribe } from 'alfa';
import {
    Link
  } from 'react-router-dom';
class NavBar extends Component{
    handleLogout = () => {
        console.log(this.props);
        this.props.logout();
    }
    render(){
        return (
            <div>
                <Navbar>
                <Navbar.Brand>
                    <Navbar.Item>
                        <Link to="/">
                            JADE Podium
                        </Link>
                    </Navbar.Item>
                    <Navbar.Burger/>
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Container>
                        <Navbar.Item dropdown hoverable>
                            <Link to="about" className="navbar-link">
                                About
                            </Link>
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
                    {
                        this.props.logged_in && 
                        <Navbar.Container position="end">
                            <Navbar.Item dropdown hoverable>
                                <Navbar.Link>
                                    User
                                </Navbar.Link>
                                <Navbar.Dropdown right boxed>
                                    <Navbar.Item href="#" onClick={this.handleLogout}>
                                        Logout
                                    </Navbar.Item>
                                </Navbar.Dropdown>
                            </Navbar.Item>
                        </Navbar.Container>
                    }
                </Navbar.Menu>
                </Navbar>
            </div>
        );
    }
}

export default subscribe(NavBar, ['logged_in', 'logout'])