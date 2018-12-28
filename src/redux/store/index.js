import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { routerMiddleware } from "connected-react-router";

import createRootReducer from "../reducers";
import { history } from "../history";
const initialState = {};

export const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware, routerMiddleware(history)];

export default createStore(
  createRootReducer(history),
  initialState,
  compose(applyMiddleware(...middleware))
);

