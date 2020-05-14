import { setEvents } from "../../Event/entity/actionsCreators";
import { put } from "redux-saga/effects";

export function* loadData(action: any) {
  const { events } = action.payload;

  const dictionary = events.reduce((result: any, event: any) => {
    return { ...result, [event.id]: { ...event } };
  }, {});

  yield put(setEvents(dictionary));
}
