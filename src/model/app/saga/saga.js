import { fork } from "redux-saga/effects";

import onAppReady from "./onAppReady";

export default function* init() {
  yield fork(onAppReady);
}
