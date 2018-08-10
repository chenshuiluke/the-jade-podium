import React, { Component } from 'react';
import Banner from './Banner';
import { Container, Nav, NavLink } from "styled-bootstrap-components";
export default class Home extends Component{
    render(){
        return (
          <Container fluid>
            <Banner logged_in={this.props.logged_in}/>
          </Container>
        )
    }
}
