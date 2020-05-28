import { createStore } from "redux";
import rootReducer from "./root-reducer";
import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

const logger = createLogger();
export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);
