import { createStore } from 'vuex'
import games from "./games";

const store = createStore({
  modules: {
    games
  }
})
export default store