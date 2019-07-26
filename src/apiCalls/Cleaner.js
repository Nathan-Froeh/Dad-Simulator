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
  return res.slip.advice
}

export const randomJokeCleaner = async (url) => {
  const res = await get(url)
  console.log(res.joke)
  return res.joke
}

export const searchAdviceCleaner = async (url) => {
  const res = await get(url)
  console.log(res.slips)
  if(res.slips) {
    return getRandom(res.slips)
  } else {
    return 'Invalid category'
  }
}

export const searchJokeCleaner = async (url) => {
  const res = await get(url)
  console.log(res)
  return res
}

const getRandom = (array) => {
  const index = Math.floor(Math.random() * (array.length - 0 + 1))
  return array[index]
}