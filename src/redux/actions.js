import { actionTypes } from "./types";

export const addBooksToState = (data) => ({
  type: actionTypes.ADD_BOOK,
  payload: data,
});
