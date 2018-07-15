import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

export default class SocialLogin extends Component{
    render(){
        const divStyle = {
            background: `white`,
            padding: 10,
            maxWidth: 300,
            margin: '0px auto',
            borderRadius: 100
        };
        
        return (
            <div style={divStyle}>
                <SocialIcon network="facebook" />
                <SocialIcon network="twitter" />
                <SocialIcon network="google" />
                <SocialIcon network="linkedin" />
            </div>
        )
    }
}