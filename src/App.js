import React, { Component } from 'react';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns } from 'react-bulma-components';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Typography from 'typography';
import funstonTheme from 'typography-theme-funston';
//import Granim from 'react-granim';
import logo from './assets/images/logo.png';

const typography = new Typography(funstonTheme);


typography.injectStyles();
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Banner/>
      </div>
    );
  }
}

export default App;
