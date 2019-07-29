import {randomFactsReducer} from './randomFactsReducer'

// 100% Test Coverage

describe('randomFactsReducer', () => {
  const action = {
    type: 'RANDOM_FACT',
    payload: 'Batman'
  }
  it('should return Batman', () => {
    expect(randomFactsReducer('', action)).toEqual('Batman')
  })

  it('should return state', () => {
    const action = {
      type: '',
      payload: 'Batman'
    }
    expect(randomFactsReducer('', action)).toEqual('')
  })
})