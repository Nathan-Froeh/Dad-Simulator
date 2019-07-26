import {combineReducers} from 'redux'
import {factOfTheDayReducer} from './factOfTheDayReducer'
import {randomFactsReducer} from './randomFactsReducer'
import {randomAdviceReducer} from './randomAdviceReducer'

const allReducers = combineReducers({
  factOfTheDay: factOfTheDayReducer,
  randomFact: randomFactsReducer,
  randomAdvice: randomAdviceReducer,
})

export default allReducers;
