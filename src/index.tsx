import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router5";
import createSagaMiddleware from "redux-saga";
import createRouter from "./App/Page/route/createRouter";
import App from "./App/Page/view";
// import * as serviceWorker from "./serviceWorker";
import { configureStore } from "./App/Page/store";
import { initPage } from "./App/Page/usecases/init";
import "./index.css";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore([sagaMiddleware]);
const router = createRouter(store);

router.start(() => {
  ReactDOM.render(
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>,
    document.getElementById("root"),
    () => {
      sagaMiddleware.run(initPage);

      // TODO add actionCreator
      store.dispatch({ type: "ON_INIT" });
    }
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
