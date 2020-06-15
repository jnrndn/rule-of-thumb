import { UP_VOTE, DOWN_VOTE, SET_CELEBRITY } from "./actions"
const defaultState = {
  celebrities: [],
}
const votes = (state = defaultState, action) => {
  switch (action.type) {
    case UP_VOTE:
      return {
        ...state,
        celebrities: state.celebrities.map((celebrity) => {
          if (celebrity.id === action.payload.id) {
            return { ...celebrity, upVotes: action.payload.newState }
          }
          return celebrity
        }),
      }
    case DOWN_VOTE:
      return {
        ...state,
        celebrities: state.celebrities.map((celebrity) => {
          if (celebrity.id === action.payload.id) {
            return { ...celebrity, downVotes: action.payload.newState }
          }
          return celebrity
        }),
      }
    case SET_CELEBRITY:
      return {
        ...state,
        celebrities: action.payload,
      }

    default:
      return state
  }
}

export default votes
