import Call from './Cleaner';
import {fetchCall} from './ApiCalls';


describe('Cleaner', () => {
  const url = 'https://batman.com';

  it('factOfTheDayCleaner should call get with url', () => {
    fetchCall.get = jest.fn()
    Call.factOfTheDayCleaner(url)
    expect(fetchCall.get).toHaveBeenCalledWith(url)
  })


})