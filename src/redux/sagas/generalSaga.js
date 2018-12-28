import { put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/generalActions";
import * as api from "../../lib/api/general";
const { GENERAL } = actions;

function* getData() {
  const response = yield api.getTodo();
  yield put({ type: GENERAL.SUCCESS, response });
}

export function* watchGeneral() {
  yield takeLatest(GENERAL.REQUEST, getData);
}
