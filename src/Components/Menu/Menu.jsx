import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Menu.scss'

class Menu extends Component {

  render() {
    return(
      <nav>
        <h1>Virtual Dad Simulator</h1>
        <div>
          <NavLink to={'/'} className='link'>
            <button>Home</button>
          </NavLink>
          <NavLink to={'/facts'} className='link'>
            <button>Facts</button>
          </NavLink>
          <NavLink to={'/jokes'} className='link'>
            <button>Jokes</button>
          </NavLink>
          <NavLink to={'/advice'} className='link'>
            <button>Advice</button>
          </NavLink>
        </div>
      </nav>
    )
  }
}

export default Menu;