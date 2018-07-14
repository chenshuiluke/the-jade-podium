import React, { Component } from 'react';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns } from 'react-bulma-components';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
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
  render() {
    return (   
      <div className="App">
        <NavBar/>
        <Route exact path="/" component={Banner}/>
        <Route exact path="/about" component={About}/>
      </div>
    );
  }
}

export default App;
