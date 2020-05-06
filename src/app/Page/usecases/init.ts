import { takeLatest } from "redux-saga/effects";

import { createStorage } from "../../Storage/usecases/create";

export function* initPage() {
  yield takeLatest("ON_INIT", createStorage);
}
