import { combineReducers } from  "redux";
import { actionTypes } from  "./types";
const  initialState  = {
books: [],
};
function  bookReducer(state  =  initialState, action) {
switch (action.type) {
case  actionTypes.ADD_BOOK:
return {
	...state,
	books: [...state.books,  action.payload],
};
default:
	break;
}
	return  state;
}

const  rootReducer  =  combineReducers({
	bookReducer,
});

export  default  rootReducer;
