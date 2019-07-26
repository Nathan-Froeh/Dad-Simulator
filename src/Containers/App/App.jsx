import React, {Component} from 'react';
import './App.scss';
import {connect} from 'react-redux';
import {selectFetch} from '../../apiCalls/ApiCalls'
import {factOfTheDay,
  randomFacts,
  // randomAdvice,
  // randomJoke,
  // searchAdvice,
  // searchJoke
} from '../../Actions/index'


class App extends Component {

  componentDidMount() {
    this.props.getFactOfTheDay('factOfTheDay')
    this.props.getRandomFacts('factOfTheDay')
    // selectFetch('randomFacts')
    // selectFetch('randomAdvice')
    // selectFetch('randomJokes')
    // selectFetch('searchAdvice', 'life')
    // selectFetch('searchJokes', 'dog')
  }

  render() {
  return (
    <div className="App">
    hi
    </div>
  );
  }
}

const mapDispatchToProps = dispatch => ({
  getFactOfTheDay: async (fact) => dispatch(factOfTheDay(await selectFetch(fact))),
  getRandomFacts: async (fact) => dispatch(await randomFacts(fact)),
  // getRandomAdvice: {},
  // getRandomJokes: {},
  // getSearchAdvice: {},
  // getSearchJokes: {}
})

export default connect(null, mapDispatchToProps)(App);
