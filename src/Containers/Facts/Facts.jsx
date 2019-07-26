import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectFetch} from '../../apiCalls/ApiCalls';
import {randomFacts} from '../../Actions/index';


export class Facts extends Component {


  render() {
    return(
      <div>
        <nav>
          <img src="" alt="Menu button"/>
          <h1>Virtual Dad Simulator</h1>
        </nav>
        <h2>stuff</h2>
      </div>
    )
  }
}