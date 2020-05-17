import { openDB } from "idb";
import { put } from "redux-saga/effects";

export function* createStorage() {
  const db = yield openDB("MyTestDB", 1, {
    upgrade(db, oldVersion, newVersion, transaction) {
      if (!db.objectStoreNames.contains("events")) {
        db.createObjectStore("events", { keyPath: "id", autoIncrement: true });
      }

      if (!db.objectStoreNames.contains("reports")) {
        db.createObjectStore("reports", { keyPath: "id", autoIncrement: true });
      }

      console.log("onupgrade");
    },
    blocked() {
      // handle the case when an old connection wasn't closed after db.onversionchange triggered
    },
    blocking() {
      alert("Database is outdated, please reload the page.");
    },
  });

  const events = yield db.getAll("events");

  yield put({ type: "AFTER_DB_INITED", payload: { events } });
}
