import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; // used for debugging our redux code

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
