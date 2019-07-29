import {searchJokesReducer} from './searchJokesReducer'

// 100% Test Coverage

describe('searchJokesReducer', () => {
  const action = {
    type: 'SEARCH_JOKES',
    payload: 'Batman'
  }
  it('should return Batman', () => {
    expect(searchJokesReducer('', action)).toEqual('Batman')
  })

  it('should return state', () => {
    const action = {
      type: '',
      payload: 'Batman'
    }
    expect(searchJokesReducer('', action)).toEqual('')
  })
})