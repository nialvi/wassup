import { openDB } from "idb";

import { IAddEventAction } from "../../Event/entity/actionsTypes";

export function* addDataIntoDb(action: IAddEventAction) {
  const { event } = action.payload;

  let data = {
    ...event,
    id: `${event.category}_${event.title}_${Math.random()}`,
    date: "2020-03-30",
    // TODO same logic from reducer addEvent
    description: [event.description],
  };

  const db = yield openDB("MyTestDB", 1);

  yield db.add("events", data);
}
