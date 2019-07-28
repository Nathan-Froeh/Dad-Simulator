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
import NoMatch from '../../Components/NoMatch/NoMatch'


export class App extends Component {

  componentDidMount() {
    this.props.getFactOfTheDay('factOfTheDay')
  }

  render() {
  return (
    <div className="App">
      <Switch>
      <Route
        exact path='/menu'
        component={Menu}
      />
      <Route
        exact path='/jokes'
        component={Jokes}
      />
      <Route
        exact path='/facts'
        component={Facts}
      />
      <Route
        exact path='/advice'
        component={Advice}
      />
      <Route
        exact path='/'
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

export const mapDispatchToProps = dispatch => ({
  getFactOfTheDay: async (fact) => dispatch(factOfTheDay(
    await selectFetch(fact)))
})

export default connect(null, mapDispatchToProps)(App);
