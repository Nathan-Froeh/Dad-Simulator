export const randomFactsReducer = (state = '', action) => {
  switch(action.type) {
    case 'RANDOM_FACT':
      return action.payload
    default:
      return state
  }
}