import {randomAdviceReducer} from './randomAdviceReducer'

describe('randomAdviceReducer', () => {
  const action = {
    type: 'RANDOM_ADVICE',
    payload: 'Batman'
  }
  it('should return Batman', () => {
    expect(randomAdviceReducer('', action)).toEqual('Batman')
  })

  it('should return state', () => {
    const action = {
      type: '',
      payload: 'Batman'
    }
    expect(randomAdviceReducer('', action)).toEqual('')
  })
})