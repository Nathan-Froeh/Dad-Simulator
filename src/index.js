import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Containers/App/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './Reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const store = createStore(allReducers, composeWithDevTools())


ReactDOM.render(
<Provider store={store}>
  <Router>
    <Route path='/' component={App}/>
  </Router>
</Provider>
  , document.getElementById('root'));

