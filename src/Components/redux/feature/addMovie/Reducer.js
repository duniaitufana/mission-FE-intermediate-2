import InitialState from "./initialState.js";
import ActionType from "../../ActionsType.js";
import initialState from "./initialState.js";

export default function AddMovieReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.ADD_MOVIE:
      return [...state, action.payload.movie];
    default:
      return state;
  }
}
