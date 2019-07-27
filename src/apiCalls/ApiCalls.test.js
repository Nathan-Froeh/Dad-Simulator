import {
  get,
  selectFetch,
  cors,
  factOfTheDay,
  randomFacts,
  randomAdvice,
  randomJokes,
  searchAdvice,
  searchJokes
} from './ApiCalls';
// import {
//   factOfTheDayCleaner,
//   randomFactCleaner,
//   randomAdviceCleaner,
//   randomJokeCleaner,
//   searchAdviceCleaner,
//   searchJokeCleaner
// } from './Cleaner'
import Call from './Cleaner';


describe('ApiCalls', () => {
  const url = 'https://batman.com'
  const method = {
    method: 'GET',
    headers:{'Accept': 'application/json'}
  }
  const data = {
    joke: 'I stepped on a dog and my foot got wet, it was a poodle'
  }

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(data)
    }))
  })

  it('fetch should be called with url and method', () => {
    get(url)
    expect(window.fetch).toHaveBeenCalledWith(url, method)
  })

  it('fetch should return a data object', async () => {
    expect(await get(url)).toEqual(data)
  })

  it('should throw ok.false error', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }))
    await expect(get(url)).rejects.toEqual(Error('Error'))
  })

  it('selectFetch should call factOfTheDayCleaner with url', async () => {
    const mockFunc = jest.spyOn(Call, 'factOfTheDayCleaner')
    await selectFetch('factOfTheDay')
    expect(mockFunc).toHaveBeenCalledWith(cors + factOfTheDay)
  })

})