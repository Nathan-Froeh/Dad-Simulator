
export const factOfTheDay = (fact) => ({
  type: 'FACT_OF_THE_DAY',
  payload: fact
})

export const randomFacts = (fact) => ({
  type: 'RANDOM_FACT',
  payload: fact
})