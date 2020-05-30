import { combineReducers } from "redux";
import { actionTypes } from "./types";

const initialContactList = {
  contactList: [],
  error: null,
  isPending: false,
  page: 1,
  searchField: "",
};
function contactListReducer(state = initialContactList, action) {
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
    case actionTypes.SEARCH_FIELD_CHANGE:
      return {
        ...state,
        searchField: action.payload,
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

const initialPersonDetail = {
  person: null,
};

function personDetailReducer(state = initialPersonDetail, action) {
  switch (action.type) {
    case actionTypes.UPDATE_PERSON_DETAIL:
      return { ...state, person: action.payload };

    default:
      break;
  }
  return state;
}

const initialStyle = {
  mode: "light",
};

function styleReducer(state = initialStyle, action) {
  switch (action.type) {
    /**
     * When its dark toggle to light and vice versa
     */
    case actionTypes.TOGGLE_DARK_MODE:
      return state.mode === "light"
        ? { ...state, mode: "dark" }
        : { ...state, mode: "light" };

    default:
      break;
  }
  return state;
}

const rootReducer = combineReducers({
  contactListReducer,
  personDetailReducer,
  styleReducer,
});

export default rootReducer;
