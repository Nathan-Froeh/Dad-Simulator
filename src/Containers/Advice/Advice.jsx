import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectFetch} from '../../apiCalls/ApiCalls';
import {
  randomAdvice,
  searchAdvice
} from '../../Actions/index';


export class Advice extends Component {


  render() {
    return(
      <div>
        <nav>
          <img src="" alt="Menu button"/>
          <h1>Virtual Dad Simulator</h1>
        </nav>
        <h2>Advice</h2>
      </div>
    )
  }
}

