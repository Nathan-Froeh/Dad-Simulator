import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectFetch} from '../../apiCalls/ApiCalls';
import {
  randomAdvice,
  searchAdvice
} from '../../Actions/index';
import {NavLink} from 'react-router-dom';
import './Advice.scss';
import menu from '../../images/menu.png';

export class Advice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: 'random',
      visibleAdvice: 'random'
    }
  }

  componentDidMount() {
    this.handleSubmit()
  }

  handleChange = (e) => {
    this.setState({category: e.target.value.toLowerCase()})
  }

  handleSubmit = (e) => {
    if(e) {
      e.preventDefault()
    }
    this.state.category === 'random' 
      ? this.viewRandom() 
      : this.viewCategory()
  }

  viewRandom = () => {
    this.props.getRandomAdvice('randomAdvice')
    this.setState({visibleAdvice: 'random'})
  }

  viewCategory = () => {
    this.props.getSearchAdvice('searchAdvice', this.state.category)
    this.setState({visibleAdvice: 'search'})
  }

  render() {
    return(
      <div className='advice'>
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
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              name='category' 
              value={this.state.category}
              onChange={this.handleChange}
              className='input'
            />
            <input type="submit" value='Dad Advice' className='button'/>
          </form>
          <h2>{this.state.visibleAdvice === 'random' 
            && this.props.randomAdvice}</h2>
          <h2>{this.state.visibleAdvice === 'search' 
            && this.props.searchAdvice}</h2>
        </main>
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