import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectFetch} from '../../apiCalls/ApiCalls';
import {
  randomJoke,
  searchJoke
} from '../../Actions/index';

export class Jokes extends Component {

  componentDidMount() {

  }


  render() {
    return(
      <div>
        <nav>
          <img src="" alt="menu button"/>
          <h1>Virtual Dad Simulator</h1>
        </nav>
        <h2>{this.props.randomJoke}</h2>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  getRandomJoke: async (joke) => dispatch(randomJoke(
    await selectFetch(joke))),
  getSearchJokes: async (joke, category) => dispatch(searchJoke(
    await selectFetch(joke, category)))
})

export const mapStateToProps = state => ({
  randomJoke: state.randomJoke,
  searchJoke: state.searchJoke
})

export default connect(mapStateToProps, mapDispatchToProps)(Jokes)