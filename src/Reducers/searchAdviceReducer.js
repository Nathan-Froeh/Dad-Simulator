export const searchAdviceReducer = (state = '', action) => {
  switch(action.type) {
    case 'SEARCH_ADVICE':
      return action.payload
    default:
      return state
  }
}