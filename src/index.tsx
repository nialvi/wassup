import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router5";
import createRouter from "./create-router";
import App from "./App/view";
import * as serviceWorker from "./serviceWorker";
import { store } from "./App/store";

import "./index.css";

const router = createRouter(store);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
