import {
  get,
  selectFetch
} from './ApiCalls'

describe('ApiCalls', () => {
  const url = 'https://batman.com'
  const method = {
    method: 'GET',
    headers:{'Accept': 'application/json'}
  }

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve()
    }))
  })

  it('fetch should be called with url and method', () => {
    get(url)
    expect(window.fetch).toHaveBeenCalledWith(url, method)
  })

})