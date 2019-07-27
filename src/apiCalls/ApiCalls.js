
import Call from './Cleaner'

export const cors = 'https://cors-anywhere.herokuapp.com/'
export const factOfTheDay = 'https://uselessfacts.jsph.pl/today.json?language=en'
export const randomFacts = 'https://useless-facts.sameerkumar.website/api'
export const randomAdvice = 'https://api.adviceslip.com/advice'
export const randomJokes = 'https://icanhazdadjoke.com/'
export const searchAdvice = 'https://api.adviceslip.com/advice/search/'
export const searchJokes = 'https://icanhazdadjoke.com/search?term='
const method = {
  method: 'GET',
  headers:{'Accept': 'application/json'}
}

export const selectFetch = async (type, search) => {
  // console.log(type)
  switch(type) {
    case 'factOfTheDay':
      console.log(type)
      return await Call.factOfTheDayCleaner(cors + factOfTheDay)
    case 'randomFact':
        console.log(type)
      return await Call.randomFactCleaner(cors + randomFacts)
    case 'randomAdvice':
        console.log(type)
      return await Call.randomAdviceCleaner(cors + randomAdvice)
    case 'randomJoke':
        console.log(type)
      return await Call.randomJokeCleaner(cors + randomJokes)
    case 'searchAdvice':
        console.log(type)
      return await Call.searchAdviceCleaner(cors + searchAdvice + search)
    case 'searchJoke':
        console.log(type)
      return await Call.searchJokeCleaner(cors + searchJokes + search)
    default:
      return null
  }
}

export const get = async (url) => {
  return fetch(url, method)
    .then(res => {
      if(res.ok) {
        return res.json()
      } else { throw Error('Error')}
    })
    // .catch (error => {throw Error(error)})


}