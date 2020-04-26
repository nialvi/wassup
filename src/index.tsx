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

const request = window.indexedDB.open("MyTestDB", 2);

request.onerror = function (event) {
  console.error("error", event);
};

request.onsuccess = function (event: any) {
  console.log("indexedDB is successed work");
};

request.onupgradeneeded = function (event) {
  const db = request.result;
  db.createObjectStore("events");
  console.log("onupgrade", event);
};
