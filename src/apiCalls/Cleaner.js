import {get} from './ApiCalls'

export const factOfTheDayCleaner = async (url) => {
  const res = await get(url)
  return res.text
}

export const randomFactCleaner = async (url) => {
  const res = await get(url)
  return res.data
}

export const randomAdviceCleaner = async (url) => {
  const res = await get(url)
  return res.slip.advice
}

export const randomJokeCleaner = async (url) => {
  const res = await get(url)
  return res.joke
}

export const searchAdviceCleaner = async (url) => {
  const res = await get(url)
  if(res.slips) {
    return getRandom(res.slips)
  } else {
    return 'Invalid search category'
  }
}

export const searchJokeCleaner = async (url) => {
  const res = await get(url)
  if(res.results.length !== 0) {
   return getRandom(res.results).joke
  } else {
    return 'invalid search category'
  }
}

const getRandom = (array) => {
  const index = Math.floor(Math.random() * (array.length - 0))
  return array[index]
}