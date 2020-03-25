import { Store } from "redux";
import createRouter from "router5";
import loggerPlugin from "router5-plugin-logger";
import browserPlugin from "router5-plugin-browser";
import { reduxPlugin } from "redux-router5";
import routes from "./routes";

export default function configureRouter(store: Store) {
  const router = createRouter(routes, {
    defaultRoute: "today"
  });

  router.usePlugin(loggerPlugin);

  router.usePlugin(browserPlugin());

  router.usePlugin(reduxPlugin(store.dispatch));

  return router;
}
