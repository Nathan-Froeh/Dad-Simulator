import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectFetch} from '../../apiCalls/ApiCalls';
import {randomFact} from '../../Actions/index';
import {NavLink} from 'react-router-dom';
import './Facts.scss';
import menu from '../../images/menu.png';

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
      <div className='facts'>
        <nav>
          <NavLink 
            to={'/menu'}
            className='menu'
          >
            <img src={menu} alt='menu button'/>
          </NavLink>
          <h1>Virtual Dad Simulator</h1>
        </nav>
        <main>
          <button 
            onClick={this.getFact} 
            className='button'
          >
            Dad Facts
          </button>
          <h2>{this.props.randomFact}</h2>
        </main>
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





