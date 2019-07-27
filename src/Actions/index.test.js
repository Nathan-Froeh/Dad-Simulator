import {
  factOfTheDay,
  randomFact,
  randomAdvice,
  randomJoke,
  searchAdvice,
  searchJoke
} from './index';


describe('Actions', () => {
  const input = 'I am Batman';

  it('factOfTheDay should return a matching object', () => {
    const expected = {
      type: 'FACT_OF_THE_DAY',
      payload: input
    }
    expect(factOfTheDay(input)).toEqual(expected)
  })

})