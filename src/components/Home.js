import React, { Component } from 'react';
import Banner from './Banner';
export default class Home extends Component{
    render(){
        return (
            <Banner logged_in={this.props.logged_in}/>
        )
    }
}