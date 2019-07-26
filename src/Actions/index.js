
export const factOfTheDay = (fact) => ({
  type: 'FACT_OF_THE_DAY',
  payload: fact
})

export const randomFacts = (fact) => ({
  type: 'RANDOM_FACT',
  payload: fact
})

export const randomAdvice = (advice) => ({
  type: 'RANDOM_ADVICE',
  payload: advice
})

export const randomJoke = (joke) => ({
  type: 'RANDOM_JOKE',
  payload: joke
})

