import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectFetch} from '../../apiCalls/ApiCalls'
import {factOfTheDay} from '../../Actions/index'


export class Home extends Component {

  componentDidMount() {
    this.isFactLoaded()
  }

  isFactLoaded = () => {
    if(!this.props.factOfTheDay) {
      this.props.getFactOfTheDay()
    }
  }

  render() {
    return(
      <div className='home'>

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