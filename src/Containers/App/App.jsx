import React, {Component} from 'react';
import './App.scss';
import {connect} from 'react-redux';
import {selectFetch} from '../../apiCalls/ApiCalls'
import {
  factOfTheDay,
  randomFacts,
  randomAdvice,
  randomJoke,
  searchAdvice,
  searchJoke
} from '../../Actions/index'
// import Home from '../Home/Home';
import Jokes from '../Jokes/Jokes';


class App extends Component {

  componentDidMount() {
    this.props.getFactOfTheDay('factOfTheDay')
    this.props.getRandomFacts('randomFacts')
    this.props.getRandomAdvice('randomAdvice')
    this.props.getRandomJoke('randomJokes')
    this.props.getSearchAdvice('searchAdvice', 'cat')
    this.props.getSearchJokes('searchJokes', 'life')
  }

  render() {
  return (
    <div className="App">
      {/* <p>hi</p> */}
      {/* <Home/> */}
      <Jokes/>
    </div>
  );
  }
}

const mapDispatchToProps = dispatch => ({
  getFactOfTheDay: async (fact) => dispatch(factOfTheDay(
    await selectFetch(fact))),
  getRandomFacts: async (fact) => dispatch(randomFacts(
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
