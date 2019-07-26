export const randomAdviceReducer = (state = '', action) => {
  switch(action.type) {
    case 'RANDOM_ADVICE':
      return action.payload
    default:
      return state
  }
}