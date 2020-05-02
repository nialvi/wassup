import { createStore, applyMiddleware, Middleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./usecases/reducers";

export const configureStore = (middlewares: Middleware[] = []) => {
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return store;
};
