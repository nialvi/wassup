import { openDB } from "idb";

export async function createStorage() {
  const db = await openDB("MyTestDB", 1, {
    upgrade(db, oldVersion, newVersion, transaction) {
      if (!db.objectStoreNames.contains("events")) {
        db.createObjectStore("events", { keyPath: "id" });
      }

      if (!db.objectStoreNames.contains("reports")) {
        db.createObjectStore("reports", { keyPath: "id" });
      }

      let eventStore = db
        .transaction("events", "readwrite")
        .objectStore("events");

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

      eventStore.put(event);

      console.log("onupgrade");
    },
    blocked() {
      // handle the case when an old connection wasn't closed after db.onversionchange triggered
    },
    blocking() {
      alert("Database is outdated, please reload the page.");
    },
  });
  console.log("idb inited");
}
