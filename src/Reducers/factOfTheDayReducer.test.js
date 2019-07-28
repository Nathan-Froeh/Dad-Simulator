import {factOfTheDayReducer} from './factOfTheDayReducer';


describe('factOfTheDayReducer', () => {
  const action = {
    type: 'FACT_OF_THE_DAY',
    payload: 'Batman'
  }
  it('should return Batman', () => {
    expect(factOfTheDayReducer('', action)).toEqual('Batman')
  })

  it('should return state', () => {
    const action = {
      type: '',
      payload: 'Batman'
    }
    expect(factOfTheDayReducer('', action)).toEqual('')
  })
})