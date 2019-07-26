import {combineReducers} from 'redux'
import {factOfTheDay} from './factOfTheDayReducer'
const testReducer = () => {
  switch(true) {
    default:
      return 'stuff'
  }
}

const allReducers = combineReducers({
  test: testReducer,
  factOfTheDay: factOfTheDay
})

export default allReducers;