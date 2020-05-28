import { actionTypes } from "./types";
import Axios from "axios";

export const fetchContactList = (page = 1) => {
  let url = `https://randomuser.me/api/?${page}&results=50&inc=id,name,gender,dob,email,phone`;

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
