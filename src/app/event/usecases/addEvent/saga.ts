import { takeEvery } from "redux-saga/effects";
import { ADD_EVENT } from "../../entity/actionsTypes";

function onSideEffect() {
  console.log("side effect");
}

function* root() {
  yield takeEvery(ADD_EVENT, onSideEffect);
}

export default root;
