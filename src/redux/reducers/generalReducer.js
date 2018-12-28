import { GENERAL } from "../actions/generalActions";

const initialState = { loggedIn: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case GENERAL.SUCCESS:
      return { ...state, loggedIn: true };
    default:
      return state;
  }
}
