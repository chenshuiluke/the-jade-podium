import React, { Component } from 'react';
// import './App.css';
//import 'react-bulma-components/dist/react-bulma-components.min.css';
//import { Columns } from 'react-bulma-components';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import { Button } from 'styled-bootstrap-components';
import logo from './assets/images/logo.png';
import Page from '../layouts/main';
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
          console.log(this.state);
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
      <Page className="App">
        <Home logged_in={this.state.logged_in}/>
      </Page>
    );
  }
}

export default App;
