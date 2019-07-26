import {factOfTheDayCleaner,
  randomFactsCleaner,
  randomAdviceCleaner,
  randomJokeCleaner,
  searchAdviceCleaner,
  searchJokeCleaner
} from './Cleaner'


const cors = 'https://cors-anywhere.herokuapp.com/'
const factOfTheDay = 'https://uselessfacts.jsph.pl/today.json?language=en'
const randomFacts = 'https://useless-facts.sameerkumar.website/api'
const randomAdvice = 'https://api.adviceslip.com/advice'
const randomJokes = 'https://icanhazdadjoke.com/'
const searchAdvice = 'https://api.adviceslip.com/advice/search/'
const searchJokes = 'https://icanhazdadjoke.com/search?term='
const method = {
  method: 'GET',
  headers:{'Accept': 'application/json'}
}

export const selectFetch = async (type, search) => {
  // console.log(type)
  switch(type) {
    case 'factOfTheDay':
      console.log(type)
      return await factOfTheDayCleaner(cors + factOfTheDay)
    case 'randomFacts':
        console.log(type)
      return await randomFactsCleaner(cors + randomFacts)
    case 'randomAdvice':
        console.log(type)
      return await randomAdviceCleaner(cors + randomAdvice)
    case 'randomJokes':
        console.log(type)
      return await randomJokeCleaner(cors + randomJokes)
    case 'searchAdvice':
        console.log(type)
      return await searchAdviceCleaner(cors + searchAdvice + search)
    case 'searchJokes':
        console.log(type)
      return await searchJokeCleaner(cors + searchJokes + search)
    default:
      return null
  }
}

export const get = async (url) => {
  const result = await fetch(url, method)
  const data = await result.json()
  return data
}