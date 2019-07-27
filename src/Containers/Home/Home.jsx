import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectFetch} from '../../apiCalls/ApiCalls'
import {factOfTheDay} from '../../Actions/index'
import {NavLink} from 'react-router-dom';

export class Home extends Component {

  componentDidMount() {
    this.isFactLoaded()
  }

  isFactLoaded = () => {
    if(!this.props.factOfTheDay) {
      this.props.getFactOfTheDay('factOfTheDay')
    }
  }

  render() {
    return(
      <div className='home'>
        <nav>
          <NavLink to={'/menu'}>
            <p>Menu</p>
          </NavLink>
          <h1>Virtual Dad Simulator</h1>
        </nav>
        <h2>{this.props.factOfTheDay}</h2>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getFactOfTheDay: async (fact) => dispatch(factOfTheDay(
    await selectFetch(fact)))
})

const mapStateToProps = state => ({
  factOfTheDay: state.factOfTheDay
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)