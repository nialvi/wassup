// TODO use package idb
// import { openDB } from "idb";

export function createStorage() {
  const requestOpenDB = window.indexedDB.open("MyTestDB", 3);

  requestOpenDB.onerror = function (event) {
    console.error("error", event);
  };

  requestOpenDB.onsuccess = function () {
    const db = requestOpenDB.result;

    const transaction = db.transaction("events", "readwrite");

    let eventsTransaction = transaction.objectStore("events");

    let event = {
      id: "meetup_standup",
      category: "meetup",
      title: "standup",
      description: [
        "This is example event with templated description",
        "This is additional description",
      ],
      date: "2020-03-30",
    };

    let requestAddEvent = eventsTransaction.put(event);

    requestAddEvent.onsuccess = function (event) {
      console.log("event added", requestAddEvent.result);
    };

    requestAddEvent.onerror = function (event) {
      console.log("error", requestAddEvent.error);
    };

    db.onversionchange = function () {
      db.close();
      alert("Database is outdated, please reload the page.");
    };

    console.log("indexedDB is successed work");
  };

  requestOpenDB.onupgradeneeded = function (event) {
    const db = requestOpenDB.result;

    if (!db.objectStoreNames.contains("events")) {
      db.createObjectStore("events", { keyPath: "id" });
    }

    if (!db.objectStoreNames.contains("reports")) {
      db.createObjectStore("reports", { keyPath: "id" });
    }

    console.log("onupgrade", event);
  };

  requestOpenDB.onblocked = function () {
    // handle the case when an old connection wasn't closed after db.onversionchange triggered
  };
}
