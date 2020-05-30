import { actionTypes } from "./types";
import Axios from "axios";

export const fetchContactList = (page = 1) => {
  let url = `https://randomuser.me/api/?${page}&results=50`;

  return function (dispatch) {
    dispatch({
      type: actionTypes.GET_CONTACTS_PENDING,
    });
    Axios.get(url)
      .then((response) =>
        dispatch({
          type: actionTypes.GET_CONTACTS_SUCCESS,
          payload: response.data,
        })
      )
      .catch((response) =>
        dispatch({
          type: actionTypes.GET_CONTACTS_FAILED,
          payload: response.error,
        })
      );
  };
};

export const updatePageNumber = (page) => ({
  type: actionTypes.UPDATE_PAGE_NUMBER,
  payload: page,
});

export const searchFieldChange = (data) => ({
  type: actionTypes.SEARCH_FIELD_CHANGE,
  payload: data,
});

export const updatePersonDetailView = (person) => ({
  type: actionTypes.UPDATE_PERSON_DETAIL,
  payload: person,
});

export const toggleDarkMode = () => ({
  type: actionTypes.TOGGLE_DARK_MODE,
});
