import { combineReducers } from "redux";
import { actionTypes } from "./types";

const initialStateContactList = {
  contactList: [],
  error: null,
  isPending: false,
  page: 1,
};
function contactListReducer(state = initialStateContactList, action) {
  switch (action.type) {
    case actionTypes.GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contactList: [...state.contactList, ...action.payload.results],
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

    case actionTypes.UPDATE_PAGE_NUMBER:
      if (action.payload < 11) {
        return {
          ...state,
          page: action.payload,
        };
      } else {
        return state;
      }
    default:
      break;
  }
  return state;
}

const rootReducer = combineReducers({
  contactListReducer,
});

export default rootReducer;
