import {get} from './ApiCalls'

export const factOfTheDayCleaner = async (url) => {
  const res = await get(url)
  return res.text
}

export const randomFactsCleaner = async (url) => {
  const res = await get(url)
  console.log(res.data)
  return res.data
}