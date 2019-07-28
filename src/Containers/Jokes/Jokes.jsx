import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectFetch} from '../../apiCalls/ApiCalls';
import {
  randomJoke,
  searchJoke
} from '../../Actions/index';
import {NavLink} from 'react-router-dom';
import './Jokes.scss';
import menu from '../../images/menu.png';

export class Jokes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: 'random',
      visibleJoke: 'random'
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
    this.props.getRandomJoke('randomJoke')
    this.setState({visibleJoke: 'random'})
  }

  viewCategory = () => {
    this.props.getSearchJoke('searchJoke', this.state.category)
    this.setState({visibleJoke: 'search'})
  }

  render() {
    return(
      <div className='jokes'>
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
            <input type="submit" value='Dad Jokes' className='button'/>
          </form>
          <h2>{this.state.visibleJoke === 'random' 
            && this.props.randomJoke}</h2>
          <h2>{this.state.visibleJoke === 'search' 
            && this.props.searchJoke}</h2>
        </main>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  getRandomJoke: async (joke) => dispatch(randomJoke(
    await selectFetch(joke))),
  getSearchJoke: async (joke, category) => dispatch(searchJoke(
    await selectFetch(joke, category)))
})

export const mapStateToProps = state => ({
  randomJoke: state.randomJoke,
  searchJoke: state.searchJoke
})

export default connect(mapStateToProps, mapDispatchToProps)(Jokes)