import {searchAdviceReducer} from './searchAdviceReducer'

describe('searchAdviceReducer', () => {
  const action = {
    type: 'SEARCH_ADVICE',
    payload: 'Batman'
  }
  it('should return Batman', () => {
    expect(searchAdviceReducer('', action)).toEqual('Batman')
  })

  it('should return state', () => {
    const action = {
      type: '',
      payload: 'Batman'
    }
    expect(searchAdviceReducer('', action)).toEqual('')
  })
})