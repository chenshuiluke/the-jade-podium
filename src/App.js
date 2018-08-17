import React, { Component } from 'react';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns } from 'react-bulma-components';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CreateQuestion from './components/CreateQuestion';
import About from './components/About';
import Typography from 'typography';
import funstonTheme from 'typography-theme-funston';
import { subscribe } from 'alfa';
//import Granim from 'react-granim';
import logo from './assets/images/logo.png';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const typography = new Typography(funstonTheme);


typography.injectStyles();
class App extends Component {
  state = {
    logged_in: false
  }
  componentDidMount(){
    let is_logged_in = localStorage.getItem('is_logged_in');

    fetch(`${process.env.REACT_APP_API_DOMAIN}/api/user/logged-in`, {credentials: 'include'})
    .then((response) => {
      response.json().then((json_response) => {
        console.log(json_response);
        if(json_response.success){
          this.props.set('logged_in', true);
          localStorage.setItem('is_logged_in', 'true');

        }
        else{
          localStorage.removeItem('is_logged_in');
          this.props.set('logged_in', false);
        }
      });
    });

  }
  render() {
    let backgroundStyle = {
      background: 'linear-gradient(135deg, #c3ec52 0%,#0ba29d 100%)',
    }
    let contentStyle = {
      minHeight: '90vh',
      maxWidth: '800px', 
      margin: '0px auto',
      backgroundColor: 'white',
      marginTop: '10px',
      padding: '20px',
      borderRadius: '3px'
  };

    return (   
      <div className="App" style={backgroundStyle}>
        <NavBar/>
        <div style={contentStyle}>
          {/* https://tylermcginnis.com/react-router-pass-props-to-components/ */}
          <Route exact path="/" component={() => { return <Home logged_in={this.state.logged_in}/>} }/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/create/question" component={CreateQuestion}/>
        </div>
      </div>
    );
  }
}

export default subscribe(App, ['set', 'logged_in'], ['logged_in']);
