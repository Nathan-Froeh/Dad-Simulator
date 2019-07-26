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
  console.log(res)
  return res
}

export const randomJokeCleaner = async (url) => {
  const res = await get(url)
  console.log(res)
  return res
}

export const searchAdviceCleaner = async (url) => {
  const res = await get(url)
  console.log(res)
  return res
}

export const searchJokeCleaner = async (url) => {
  const res = await get(url)
  console.log(res)
  return res
}