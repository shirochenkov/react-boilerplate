import { take } from "redux-saga/effects";

import { APP_READY } from "../CONSTANTS";

export default function* onAppReady() {
  yield take(APP_READY);
}
