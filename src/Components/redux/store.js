import { createStore } from "redux";
import Reducer from "./feature/addMovie/Reducer.js";

const store = createStore(Reducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
