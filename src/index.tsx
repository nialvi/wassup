import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router5";
import createRouter from "./App/Page/route/createRouter";
import App from "./App/Page/view";
// import * as serviceWorker from "./serviceWorker";
import { store } from "./App/Page/store";

import "./index.css";

const router = createRouter(store);

router.start(() => {
  ReactDOM.render(
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>,
    document.getElementById("root")
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

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
