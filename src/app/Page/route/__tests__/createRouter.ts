import { createStore, combineReducers } from "redux";
import createRouter from "../createRouter";

describe("Route", () => {
  it("should be create router", () => {
    const store = createStore(() => {});
    const router = createRouter(store);

    expect(router).not.toBe(undefined);
    expect(router).not.toBe(null);
    expect(router).not.toEqual({});
  });
});
