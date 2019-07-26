import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectFetch} from '../../apiCalls/ApiCalls';
import {
  randomAdvice,
  searchAdvice
} from '../../Actions/index';


export class Advice extends Component {

  componentDidMount() {
    this.props.getRandomAdvice('randomAdvice')
  }

  render() {
    return(
      <div>
        <nav>
          <img src="" alt="Menu button"/>
          <h1>Virtual Dad Simulator</h1>
        </nav>
        <h2>{this.props.randomAdvice}</h2>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  getRandomAdvice: async (advice) => dispatch(randomAdvice(
    await selectFetch(advice))),
  getSearchAdvice: async (advice, category) => dispatch(searchAdvice(
    await selectFetch(advice, category)))
})

export const mapStateToProps = state => ({
  randomAdvice: state.randomAdvice,
  searchAdvice: state.searchAdvice
})

export default connect(mapStateToProps, mapDispatchToProps)(Advice)