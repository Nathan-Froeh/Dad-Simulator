import React, {Component} from 'react';
import './App.scss';
import {connect} from 'react-redux';
import {selectFetch} from '../../apiCalls/ApiCalls';
import {Route, Switch} from 'react-router-dom';
import {factOfTheDay} from '../../Actions/index';
import Home from '../Home/Home';
import Jokes from '../Jokes/Jokes';
import Facts from '../Facts/Facts';
import Advice from '../Advice/Advice';
import Menu from '../../Components/Menu/Menu'

export class App extends Component {

  componentDidMount() {
    this.props.getFactOfTheDay('factOfTheDay')
  }

  render() {
  return (
    <div className="App">
      <Switch>
      <Route
        path='/menu'
        component={Menu}
      />
      <Route
        path='/jokes'
        component={Jokes}
      />
      <Route
        path='/facts'
        component={Facts}
      />
      <Route
        path='/advice'
        component={Advice}
      />
      <Route
        path='/'
        component={Home}
      />
      <Route
        component={NoMatch}
      />
      </Switch>
    </div>
  );
  }
}

const mapDispatchToProps = dispatch => ({
  getFactOfTheDay: async (fact) => dispatch(factOfTheDay(
    await selectFetch(fact)))
})

export default connect(null, mapDispatchToProps)(App);
