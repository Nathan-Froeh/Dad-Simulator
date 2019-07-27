import React, {Component} from 'react';
import './App.scss';
import {connect} from 'react-redux';
import {selectFetch} from '../../apiCalls/ApiCalls';
import {Route} from 'react-router-dom';
import {
  factOfTheDay,
  randomFact,
  randomAdvice,
  randomJoke,
  searchAdvice,
  searchJoke
} from '../../Actions/index';
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
        exact path='/'
        component={Home}
      />
    </div>
  );
  }
}

const mapDispatchToProps = dispatch => ({
  getFactOfTheDay: async (fact) => dispatch(factOfTheDay(
    await selectFetch(fact))),
  getRandomFact: async (fact) => dispatch(randomFact(
    await selectFetch(fact))),
  getRandomAdvice: async (advice) => dispatch(randomAdvice(
    await selectFetch(advice))),
  getRandomJoke: async (joke) => dispatch(randomJoke(
      await selectFetch(joke))),
  getSearchAdvice: async (advice, category) => dispatch(searchAdvice(
    await selectFetch(advice, category))),
  getSearchJokes: async (joke, category) => dispatch(searchJoke(
    await selectFetch(joke, category)))
})

export default connect(null, mapDispatchToProps)(App);
