import React, {Component} from 'react';
import './App.scss';
import {connect} from 'react-redux';
import {factOfTheDay} from '../../Actions/index'
import {selectFetch} from '../../apiCalls/ApiCalls'


class App extends Component {

  componentDidMount() {
    this.props.getFactOfTheDay('factOfTheDay')
    // selectFetch('factOfTheDay')
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
  getFactOfTheDay: async (fact) => dispatch(factOfTheDay(await selectFetch(fact)))
  // getRandomFacts: {},
  // getRandomAdvice: {},
  // getRandomJokes: {},
  // getSearchAdvice: {},
  // getSearchJokes: {}
})

export default connect(null, mapDispatchToProps)(App);
