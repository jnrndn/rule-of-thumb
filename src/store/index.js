import { createStore } from "redux"
import votes from "./reducers"

const store = createStore(
  votes,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
