import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import reducers from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
  collapsed: true,
  duration: true
});

const middleware = applyMiddleware(sagaMiddleware, logger);

const store = createStore(
  reducers,
  undefined, // preloaded state (leave undefined for now)
  middleware
);

sagaMiddleware.run(sagas);

export default store;
