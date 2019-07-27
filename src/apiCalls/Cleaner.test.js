import Call from './Cleaner';
import {fetchCall} from './ApiCalls';


describe('Cleaner', () => {
  const url = 'https://batman.com';

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

  })

  it('randomAdviceCleaner should call get with url', () => {
    
  })

  it('randomJokeCleaner should call get with url', () => {
    
  })

  it('searchAdviceCleaner should call get with url', () => {
    
  })

  it('searchJokeCleaner should call get with url', () => {
    
  })

  it('getRandom should return a number between 1 and 10', () => {

  })
})