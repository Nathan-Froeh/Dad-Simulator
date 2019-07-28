import Call from './Cleaner';
import {fetchCall} from './ApiCalls';


describe('Cleaner', () => {
  const url = 'https://batman.com';
  const invalid = 'Invalid search category'
  beforeEach(() => {
    fetchCall.get = jest.fn()
  })

  it('factOfTheDayCleaner should call get with url', () => {
    Call.factOfTheDayCleaner(url)
    expect(fetchCall.get).toHaveBeenCalledWith(url)
  })

  it('factOfTheDayCleaner should return Batman', async () => {
    fetchCall.get = jest.fn(() => ({text:'Batman'}))
    expect(await Call.factOfTheDayCleaner(url)).toEqual('Batman')
  })

  it('randomFactCleaner should call get with url', () => {
    Call.randomFactCleaner(url)
    expect(fetchCall.get).toHaveBeenCalledWith(url)
  })

  it('randomFactCleaner should return Batman', async () => {
    fetchCall.get = jest.fn(() => ({data:'Batman'}))
    expect(await Call.randomFactCleaner(url)).toEqual('Batman')
  })

  it('randomAdviceCleaner should call get with url', () => {
    Call.randomAdviceCleaner(url)
    expect(fetchCall.get).toHaveBeenCalledWith(url)
  })

  it('randomAdviceCleaner should return Batman', async () => {
    fetchCall.get = jest.fn(() => ({slip: {advice:'Batman'}}))
    expect(await Call.randomAdviceCleaner(url)).toEqual('Batman')
  })

  it('randomJokeCleaner should call get with url', () => {
    Call.randomJokeCleaner(url)
    expect(fetchCall.get).toHaveBeenCalledWith(url)
  })

  it('randomJokeCleaner should return Batman', async () => {
    fetchCall.get = jest.fn(() => ({joke:'Batman'}))
    expect(await Call.randomJokeCleaner(url)).toEqual('Batman')
  })  

  it('searchAdviceCleaner should call get with url', () => {
    Call.searchAdviceCleaner(url)
    expect(fetchCall.get).toHaveBeenCalledWith(url)
  })

  it('searchAdviceCleaner should return Batman', async () => {
    fetchCall.get = jest.fn(() => ({slips: [{advice:'Batman'}]}))
    expect(await Call.searchAdviceCleaner(url)).toEqual('Batman')
  }) 

  it('searchJokeCleaner should call get with url', () => {
    Call.searchJokeCleaner(url)
    expect(fetchCall.get).toHaveBeenCalledWith(url)
  })

  it('searchJokeCleaner should return Batman', async () => {
    fetchCall.get = jest.fn(() => ({results:[{joke:'Batman'}]}))
    expect(await Call.searchJokeCleaner(url)).toEqual('Batman')
  }) 

  it('searchAdviceCleaner should return Invalid search category', async () => {
    fetchCall.get = jest.fn(() => ({}))
    expect(await Call.searchAdviceCleaner(url)).toEqual(invalid)
  })

  it('searchJokeCleaner should return Invalid search category', async () => {
    fetchCall.get = jest.fn(() => ({results:[]}))
    expect(await Call.searchJokeCleaner(url)).toEqual(invalid)
  })

  it('getRandom should return a number between 0 and 9', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(Call.getRandom(array)).toBeGreaterThanOrEqual(1)
    expect(Call.getRandom(array)).toBeLessThanOrEqual(10)
  })
})