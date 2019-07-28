import {combineReducers} from 'redux';
import {factOfTheDayReducer} from './factOfTheDayReducer';
import {randomFactsReducer} from './randomFactsReducer';
import {randomAdviceReducer} from './randomAdviceReducer';
import {randomJokesReducer} from './randomJokesReducer';
import {searchAdviceReducer} from './searchAdviceReducer';
import {searchJokesReducer} from './searchJokesReducer';

const allReducers = combineReducers({
  factOfTheDay: factOfTheDayReducer,
  randomFact: randomFactsReducer,
  randomAdvice: randomAdviceReducer,
  randomJoke: randomJokesReducer,
  searchAdvice: searchAdviceReducer,
  searchJoke: searchJokesReducer
})

export default allReducers;
