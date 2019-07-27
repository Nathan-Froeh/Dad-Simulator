import React from 'react';
import {NavLink} from 'react-router-dom';


const NoMatch = () => {
  return(
    <div>
      <nav>
        <NavLink to={'/menu'}>
          <p>Menu</p>
        </NavLink>
        <h1>Virtual Dad Simulator</h1>
      </nav>
      <h2>Page does not exist</h2>
    </div>
  )
}

export default NoMatch;