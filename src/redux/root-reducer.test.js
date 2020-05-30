import { fetchContactList } from "./actions";

import { actionTypes } from "./types";
import * as reducers from "./root-reducer";

describe("contactListReducer", () => {
  const initialState = {
    contactList: [],
    error: null,
    isPending: false,
    page: 1,
    searchField: "",
  };
  it("should return initial state", () => {
    expect(reducers.contactListReducer(undefined, {})).toEqual(initialState);
  });

  it("change in search Field", () => {
    expect(
      reducers.contactListReducer(initialState, {
        type: actionTypes.SEARCH_FIELD_CHANGE,
        payload: "abc",
      })
    ).toEqual({
      contactList: [],
      error: null,
      isPending: false,
      page: 1,
      searchField: "abc",
    });
  });

  it("should handle Request contactlist pending action", () => {
    expect(
      reducers.contactListReducer(initialState, {
        type: actionTypes.GET_CONTACTS_PENDING,
      })
    ).toEqual({
      contactList: [],
      error: null,
      isPending: true,
      page: 1,
      searchField: "",
    });
  });

  it("should handle Request contactlist success action", () => {
    expect(
      reducers.contactListReducer(initialState, {
        type: actionTypes.GET_CONTACTS_SUCCESS,
        payload: { results: [1, 2, 3, 4] },
      })
    ).toEqual({
      contactList: [1, 2, 3, 4],
      error: null,
      isPending: false,
      page: 1,
      searchField: "",
    });
  });
  it("should handle Request contactlist Error action", () => {
    expect(
      reducers.contactListReducer(initialState, {
        type: actionTypes.GET_CONTACTS_FAILED,
        payload: "BAD REQUEST",
      })
    ).toEqual({
      contactList: [],
      error: "BAD REQUEST",
      isPending: false,
      page: 1,
      searchField: "",
    });
  });
});
