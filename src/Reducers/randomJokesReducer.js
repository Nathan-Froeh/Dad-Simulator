export const randomJokesReducer = (state = '', action) => {
  switch(action.type) {
    case 'RANDOM_JOKES':
      return action.payload
    default:
      return state
  }
}