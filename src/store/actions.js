export const UP_VOTE = "UP_VOTE"
export const DOWN_VOTE = "DOWN_VOTE"
export const SET_CELEBRITY = "SET_CELEBRITY"

export const upVote = (payload) => {
  return { type: UP_VOTE, payload }
}
export const downVote = (payload) => {
  return { type: DOWN_VOTE, payload }
}
export const setCelebrity = (payload) => {
  return { type: SET_CELEBRITY, payload }
}
