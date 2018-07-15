import React, { Component } from 'react';
import SocialLogin from './SocialLogin';

const bannerStyle = {
    background: 'linear-gradient(135deg, #c3ec52 0%,#0ba29d 100%)',
    minHeight: '90vh',
    width: '100vw'
};
const headingStyle={
    paddingTop: '10vh',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: 'white'
}

const subHeadingStyle={
    textAlign: 'center',
    verticalAlign: 'middle',
    color: 'white'
}
export default class Banner extends Component{
    render(){
        return(
            <div style={bannerStyle}>
                <h1 style={headingStyle}>Welcome to the JADE Podium</h1>
                <h3 style={subHeadingStyle}>Get Started:</h3>
                <SocialLogin/>
            </div>
        );
    }
}