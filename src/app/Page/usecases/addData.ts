import { openDB } from "idb";

import { IAddEventAction } from "../../Event/entity/actionsTypes";

export function* addDataIntoDb(action: IAddEventAction) {
  const { event } = action.payload;
  const id = `${event.category}_${event.title}`;
  let data;
  const db = yield openDB("MyTestDB", 1);
  const eventFromDb = yield db.get("events", id);

  if (eventFromDb) {
    data = {
      ...eventFromDb,
      description: [...eventFromDb.description, event.description],
    };

    yield db.delete("events", id);
  } else {
    data = {
      ...event,
      id: `${event.category}_${event.title}`,
      description: [event.description],
    };
  }

  yield db.add("events", data);
}
