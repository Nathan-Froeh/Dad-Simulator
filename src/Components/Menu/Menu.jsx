import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class Menu extends Component {

  render() {
    return(
      <nav>
        <h1>Virtual Dad Simulator</h1>
        <div>
          <NavLink to={'/'}>
            <p>Home</p>
          </NavLink>
          <NavLink to={'/facts'}>
            <p>Facts</p>
          </NavLink>
          <NavLink to={'/jokes'}>
            <p>Jokes</p>
          </NavLink>
          <NavLink to={'/advice'}>
            <p>Advice</p>
          </NavLink>
        </div>
      </nav>
    )
  }
}

export default Menu;