import { combineReducers } from "redux-immutable";

import app from "./app/reducer";
import user from "./user-api/reducer";

const rootReducer = combineReducers({
  app,
  user
});

export default rootReducer;
