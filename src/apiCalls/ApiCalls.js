
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
      return await get(cors + factOfTheDay)
    case 'randomFacts':
      return await get(cors + randomFacts)
    case 'randomAdvice':
      return await get(cors + randomAdvice)
    case 'randomJokes':
      return await get(cors + randomJokes)
    case 'searchAdvice':
      return await get(cors + searchAdvice + search)
    case 'searchJokes':
      return await get(cors + searchJokes + search)
    default:
      return null
  }
}

const get = async (url) => {
  const result = await fetch(url, method)
  const data = await result.json()
  return data
}