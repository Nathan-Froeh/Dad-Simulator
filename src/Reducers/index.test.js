import allReducers from './index';
import {factOfTheDayReducer} from './factOfTheDayReducer';
import {randomFactsReducer} from './randomFactsReducer';
import {randomAdviceReducer} from './randomAdviceReducer';
import {randomJokesReducer} from './randomJokesReducer';
import {searchAdviceReducer} from './searchAdviceReducer';
import {searchJokesReducer} from './searchJokesReducer';


describe('allReducers', () => {

  it('factOfTheDay should call factOfTheDayReducer', () => {
    const action = {
      type: 'FACT_OF_THE_DAY',
      payload: 'Batman'
    }
    expect(allReducers('', action).factOfTheDay).toEqual('Batman')
  })

  it('randomFact should call randomFactsReducer', () => {
    const action = {
      type: 'RANDOM_FACT',
      payload: 'Batman'
    }
    expect(allReducers('', action).randomFact).toEqual('Batman')
  })

  it('randomAdvice should call randomAdviceReducer', () => {
    const action = {
      type: 'RANDOM_ADVICE',
      payload: 'Batman'
    }
    expect(allReducers('', action).randomAdvice).toEqual('Batman')
  })

  it('randomJoke should call randomJokesReducer', () => {
    const action = {
      type: 'RANDOM_JOKES',
      payload: 'Batman'
    }
    expect(allReducers('', action).randomJoke).toEqual('Batman')
  })

  it('searchAdvice should call searchAdviceReducer', () => {
    const action = {
      type: 'SEARCH_ADVICE',
      payload: 'Batman'
    }
    expect(allReducers('', action).searchAdvice).toEqual('Batman')
  })

  it('searchJoke should call searchJokesReducer', () => {
    const action = {
      type: 'SEARCH_JOKES',
      payload: 'Batman'
    }
    expect(allReducers('', action).searchJoke).toEqual('Batman')
  })

})