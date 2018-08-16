import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider, subscribe } from 'alfa';
import { logout } from './utils/auth';
let logged_in = localStorage.getItem('is_logged_in') != null;


let data = {
  logged_in: logged_in,
  logout: logout
}
ReactDOM.render(
<Router>
  <Provider data={data}>
    <App />
  </Provider>
</Router>, document.getElementById('root'));
registerServiceWorker();
