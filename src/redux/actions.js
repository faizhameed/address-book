import { actionTypes } from "./types";
import Axios from "axios";

export const fetchContactList = (data) => {
  let url = `https://randomuser.me/api/?results=50`;

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
