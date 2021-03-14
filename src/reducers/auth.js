import { AUTHENTICATED, NOT_AUTHENTICATED } from "../actions";

const initialState = {
  authChecked: false,
  loggedIn: false,
  currentUser: {}
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        authChecked: true,
        loggedIn: true,
        currentUser: action.payload,
      };
    case NOT_AUTHENTICATED:
      return {
        authChecked: true,
        loggedIn: false,
        currentUser: {}
      };
    default:
      return state;
  }
}
