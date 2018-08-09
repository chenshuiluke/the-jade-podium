import React, { Component } from 'react';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns } from 'react-bulma-components';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Typography from 'typography';
import funstonTheme from 'typography-theme-funston';
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
          this.setState({logged_in: true});
          localStorage.setItem('is_logged_in', 'true');

        }
        else{
          localStorage.removeItem('is_logged_in');
          this.setState({logged_in: false});
        }
      });
    });

  }
  render() {
    return (   
      <div className="App">
        <NavBar/>
        {/* https://tylermcginnis.com/react-router-pass-props-to-components/ */}
        <Route exact path="/" component={() => { return <Home logged_in={this.state.logged_in}/>} }/>
        <Route exact path="/about" component={About}/>
      </div>
    );
  }
}

export default App;
