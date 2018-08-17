import React, { Component } from 'react';
import SocialLogin from './SocialLogin';
import { Facebook } from 'react-content-loader'

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

function Heading() {
    return (
        <div>
            <h3 style={subHeadingStyle}>Get Started:</h3>
            <SocialLogin/>
        </div>
    )
}
export default class Banner extends Component{
    render(){
        console.log(this.props);

        let content = !this.props.logged_in ? 
            <Heading />
        :
            (
                <div style={{maxWidth: 500, margin: "0px auto"}}>
                    <Facebook speed={0.7} />
                </div>
            );
        return(
            <div>
                <h1 style={headingStyle}>Welcome to the JADE Podium</h1>
                {content}
            </div>
        );
    }
}