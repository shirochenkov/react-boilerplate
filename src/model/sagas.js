// EXTERNAL IMPORTS
import { all, spawn } from "redux-saga/effects";

// sagas:
import app from "./app/saga";

export default function* rootSaga() {
  yield all([
    spawn(app, {
      // init options
    })
  ]);
}
