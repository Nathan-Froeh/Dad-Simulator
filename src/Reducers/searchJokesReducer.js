export const searchJokesReducer = (state = '', action) => {
  switch(action.type) {
    case 'SEARCH_JOKES':
      return action.payload
    default:
      return state
  }
}
