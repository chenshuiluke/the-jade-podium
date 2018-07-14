import React, { Component } from 'react';
const bannerStyle = {
    background: 'linear-gradient(135deg, #c3ec52 0%,#0ba29d 100%)',
    minHeight: '90vh',
    width: '100vw'
};
const headingStyle={
    paddingTop: '30vh',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: 'white'
}
export default class Banner extends Component{
    render(){
        return(
            <div style={bannerStyle}>
                <h1 style={headingStyle}>Welcome to the JADE Podium</h1>
            </div>
        );
    }
}