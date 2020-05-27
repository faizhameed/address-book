import { createStore } from "redux";
import rootReducer from "./root-reducer";
import { applyMiddleware } from "redux";

export const store = createStore(rootReducer);