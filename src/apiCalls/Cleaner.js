import {get} from './ApiCalls'

const Call = {

async factOfTheDayCleaner(url) {
  console.log('factOfTheDayCleaner')
  const res = await get(url)
  return res.text
},

async randomFactCleaner(url) {
  const res = await get(url)
  return res.data
},

async randomAdviceCleaner(url) {
  const res = await get(url)
  return res.slip.advice
},

async randomJokeCleaner(url) {
  const res = await get(url)
  return res.joke
},

async searchAdviceCleaner(url) {
  const res = await get(url)
  if(res.slips) {
    return this.getRandom(res.slips).advice
  } else {
    return 'Invalid search category'
  }
},

async searchJokeCleaner(url) {
  const res = await get(url)
  if(res.results.length !== 0) {
   return this.getRandom(res.results).joke
  } else {
    return 'invalid search category'
  }
},

getRandom(array) {
  const index = Math.floor(Math.random() * (array.length - 0))
  return array[index]
}
}

export default Call