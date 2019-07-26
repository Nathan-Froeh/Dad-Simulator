import {combineReducers} from 'redux'
import {factOfTheDayReducer} from './factOfTheDayReducer'
import {randomFactsReducer} from './randomFactsReducer'
const testReducer = () => {
  switch(true) {
    default:
      return 'stuff'
  }
}

const allReducers = combineReducers({
  test: testReducer,
  factOfTheDay: factOfTheDayReducer,
  randomFact: randomFactsReducer,
})

export default allReducers;