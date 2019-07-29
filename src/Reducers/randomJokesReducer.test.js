import {randomJokesReducer} from './randomJokesReducer'

// 100% Test Coverage

describe('randomJokesReducer', () => {
  const action = {
    type: 'RANDOM_JOKES',
    payload: 'Batman'
  }
  it('should return Batman', () => {
    expect(randomJokesReducer('', action)).toEqual('Batman')
  })

  it('should return state', () => {
    const action = {
      type: '',
      payload: 'Batman'
    }
    expect(randomJokesReducer('', action)).toEqual('')
  })
})