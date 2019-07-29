import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectFetch} from '../../apiCalls/ApiCalls'
import {factOfTheDay} from '../../Actions/index'
import {NavLink} from 'react-router-dom';
import './Home.scss';
import menu from '../../images/menu.png';

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
          <NavLink 
            to={'/menu'}
            className='menu'
          >
            <div>
              <img src={menu} alt='menu button'/>
            </div>
          </NavLink>
          <h1>Virtual Dad Simulator</h1>
        </nav>
        <main>
          <h2>Fact of the day</h2>
          <h2>{this.props.factOfTheDay}</h2>
        </main>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  getFactOfTheDay: async (fact) => dispatch(factOfTheDay(
    await selectFetch(fact)))
})

export const mapStateToProps = state => ({
  factOfTheDay: state.factOfTheDay
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)