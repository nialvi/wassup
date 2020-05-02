import { configureStore } from "../store";
import { inititalState as initialStateEvent } from "../../Event/entity/reducer";

const initialState = {
  events: {
    ...initialStateEvent,
  },
  router: {
    previousRoute: null,
    route: null,
    transitionError: null,
    transitionRoute: null,
  },
};

describe("store", () => {
  it("initial state", () => {
    const store = configureStore();
    expect(store.getState()).toEqual(initialState);
  });
});
