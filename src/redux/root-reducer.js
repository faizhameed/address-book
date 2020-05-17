import { combineReducers } from "redux";

const initialState = {
  books: [],
};

function bookReducer(state = initialState, action) {
  return state;
}

const rootReducer = combineReducers({
  bookReducer,
});

export default rootReducer;
