import { takeLatest } from "redux-saga/effects";

import { createStorage } from "../../Storage/usecases/create";
import { loadData } from "./loadData";

export function* initPage() {
  yield takeLatest("ON_INIT", createStorage);
  yield takeLatest("AFTER_DB_INITED", loadData);
}
