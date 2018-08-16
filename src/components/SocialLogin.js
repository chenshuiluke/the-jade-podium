import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

export default class SocialLogin extends Component{
    componentDidMount(){
        //Retrieve element and remove its target attribute
        let facebook_icon = document.getElementById('facebook-login-icon');
        facebook_icon.removeAttribute('target');
    }    
    render(){
        const divStyle = {
            background: `white`,
            padding: 10,
            maxWidth: 90,
            margin: '0px auto',
            borderRadius: 100
        };
        console.log(process.env.REACT_APP_API_DOMAIN);
        return (
            <div style={divStyle}>
                <SocialIcon network="facebook" id="facebook-login-icon" url={`${process.env.REACT_APP_API_DOMAIN}/login/facebook`} />
                {/* <SocialIcon network="twitter" />
                <SocialIcon network="google" />
                <SocialIcon network="linkedin" /> */}
            </div>
        )
    }
}