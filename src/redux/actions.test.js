import { actionTypes } from "./types";
import * as actions from "./actions";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

it("Should set search field given", () => {
  const text = "ad";
  const expectedAction = {
    type: actionTypes.SEARCH_FIELD_CHANGE,
    payload: text,
  };
  expect(actions.searchFieldChange(text)).toEqual(expectedAction);
});

it("Request users from API", () => {
  const store = mockStore();
  store.dispatch(actions.fetchContactList());
  const action = store.getActions();
  const expectedAction = {
    type: actionTypes.GET_CONTACTS_PENDING,
  };
  expect(action[0]).toEqual(expectedAction);
});
