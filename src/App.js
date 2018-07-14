import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns } from 'react-bulma-components';
import NavBar from './components/NavBar';
import Typography from 'typography';
import funstonTheme from 'typography-theme-funston';

const typography = new Typography(funstonTheme);
typography.injectStyles();
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        {/* <Columns>
            <Columns.Column>
              First Column
            </Columns.Column>
            <Columns.Column>
              Second Column
            </Columns.Column>
            <Columns.Column>
              Third Column
            </Columns.Column>
            <Columns.Column>
              Fourth Column
            </Columns.Column>
          </Columns> */}
      </div>
    );
  }
}

export default App;
