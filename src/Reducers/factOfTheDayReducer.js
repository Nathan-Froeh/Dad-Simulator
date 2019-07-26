
export const factOfTheDayReducer = (state = '', action) => {
  switch(action.type) {
    case 'FACT_OF_THE_DAY':
      return action.payload
    default:
      return state
  }
}
