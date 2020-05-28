import { combineReducers } from "redux";
import { actionTypes } from "./types";

const initialStateContactList = {
  contactList: null,
  error: null,
  isPending: false,
};
function contactListReducer(state = initialStateContactList, action) {
  switch (action.type) {
    case actionTypes.GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contactList: action.payload,
        isPending: false,
      };

    case actionTypes.GET_CONTACTS_PENDING:
      return {
        ...state,
        isPending: true,
      };
    case actionTypes.GET_CONTACTS_FAILED:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      break;
  }
  return state;
}

const rootReducer = combineReducers({
  contactListReducer,
});

export default rootReducer;
