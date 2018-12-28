import { fork, all } from "redux-saga/effects";

// Sagas
import { watchGeneral } from "./generalSaga";

export default function* root() {
  yield all([fork(watchGeneral)]);
}
