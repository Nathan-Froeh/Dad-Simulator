export const randomFactsReducer = (state = '', action) => {
  switch(action.type) {
    case 'RANDOM_FACTS':
      return action.payload
    default:
      return state
  }
}