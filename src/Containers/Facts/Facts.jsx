import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectFetch} from '../../apiCalls/ApiCalls';
import {randomFact} from '../../Actions/index';
import {NavLink} from 'react-router-dom';


export class Facts extends Component {
  componentDidMount() {
    this.getFact()
  }

  getFact = () => {
    console.log('hi')
    this.props.getRandomFacts('randomFact')
  }

  render() {
    return(
      <div>
        <nav>
          <NavLink to={'/menu'}>
            <p>Menu</p>
          </NavLink>
          <h1>Virtual Dad Simulator</h1>
        </nav>
        <button onClick={this.getFact} className='button'>Refresh</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Facts)