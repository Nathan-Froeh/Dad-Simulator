import {get} from './ApiCalls'

export const factOfTheDayCleaner = async (url) => {
  const res = await get(url)
  return res.text
}
