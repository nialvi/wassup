import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router5";
import createRouter from "./App/Page/route/create-router";
import App from "./App/Page/view";
import * as serviceWorker from "./serviceWorker";
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
serviceWorker.unregister();
