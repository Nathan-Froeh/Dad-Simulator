import {get} from './ApiCalls'

export const factOfTheDayCleaner = async (url) => {
  const res = await get(url)
  return res.text
}

export const randomFactsCleaner = async (url) => {
  const res = await get(url)
  return res.data
}

export const randomAdviceCleaner = async (url) => {
  const res = await get(url)
  return res.data
}