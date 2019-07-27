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

  it('randomFact should return a matching object', () => {
    const expected = {
      type: 'RANDOM_FACT',
      payload: input
    }
    expect(randomFact(input)).toEqual(expected)
  })

  it('randomAdvice should return a matching object', () => {
    const expected = {
      type: 'RANDOM_ADVICE',
      payload: input
    }
    expect(randomAdvice(input)).toEqual(expected)
  })

  it('randomJoke should return a matching object', () => {
    const expected = {
      type: 'RANDOM_JOKES',
      payload: input
    }
    expect(randomJoke(input)).toEqual(expected)
  })

})