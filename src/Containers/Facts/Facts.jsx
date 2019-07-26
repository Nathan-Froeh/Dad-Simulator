import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectFetch} from '../../apiCalls/ApiCalls';
import {randomFact} from '../../Actions/index';


export class Fact extends Component {

  componentDidMount() {
    this.props.getRandomFacts('randomFact')
  }

  render() {
    return(
      <div>
        <nav>
          <img src="" alt="Menu button"/>
          <h1>Virtual Dad Simulator</h1>
        </nav>
        <h2>{this.props.randomFact}</h2>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  getRandomFacts: async (fact) => dispatch(randomFact(
    await selectFetch(fact)))
})

export const mapStateToProps = state => ({
  randomFact: state.randomFact
})

export default connect(mapStateToProps, mapDispatchToProps)(Fact)