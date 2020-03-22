import { createStore, applyMiddleware, Middleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const middleware: Middleware[] = [];

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
