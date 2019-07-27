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
    Call.factOfTheDayCleaner = jest.fn()
    await selectFetch('factOfTheDay')
    expect(Call.factOfTheDayCleaner).toHaveBeenCalledWith(cors + factOfTheDay)
  })

  it('selectFetch should call randomFactCleaner with url', async () => {
    Call.randomFactCleaner = jest.fn()
    await selectFetch('randomFact')
    expect(Call.randomFactCleaner).toHaveBeenCalledWith(cors + randomFacts)
  })

  it('selectFetch should call randomAdviceCleaner with url', async () => {
    Call.randomAdviceCleaner = jest.fn()
    await selectFetch('randomAdvice')
    expect(Call.randomAdviceCleaner).toHaveBeenCalledWith(cors + randomAdvice)
  })

  xit('selectFetch should call randomJokeCleaner with url', async () => {
    Call.randomJokeCleaner = jest.fn()
    await selectFetch('randomJoke')
    expect(Call.randomJokeCleaner).toHaveBeenCalledWith(cors + randomJokes)
  })

  xit('selectFetch should call searchAdviceCleaner with url', async () => {
    const mockFunc = jest.spyOn(Call, 'searchAdviceCleaner')
    await selectFetch('searchAdvice')

  })

  xit('selectFetch should call searchJokeCleaner with url', async () => {
    const mockFunc = jest.spyOn(Call, 'searchJokeCleaner')
    await selectFetch('searchJoke')

  })

})