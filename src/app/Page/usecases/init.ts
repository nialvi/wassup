import { takeLatest } from "redux-saga/effects";

import { createStorage } from "../../Storage/usecases/create";
import { loadDataFromDb } from "./loadData";
import { addDataIntoDb } from "./addData";
import { ADD_EVENT } from "../../Event/entity/actionsTypes";

export function* initPage() {
  yield takeLatest("ON_INIT", createStorage);
  yield takeLatest("AFTER_DB_INITED", loadDataFromDb);
  yield takeLatest(ADD_EVENT, addDataIntoDb);
}
