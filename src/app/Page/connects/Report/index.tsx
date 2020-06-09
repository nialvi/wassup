import { connect } from "react-redux";
import { getClosestDayOfWeek } from "../../../utils/date";
import View from "../../../Report/view/index";
import { State } from "../../usecases/reducers";
import { isBefore } from "date-fns";

const isBetween = (
  day: Date,
  firstBorder: Date,
  secondBorder: Date
): boolean => {
  return isBefore(firstBorder, day) && isBefore(day, secondBorder);
};

const mapStateToProps = (state: State) => {
  const startDay = getClosestDayOfWeek("Mon");
  const endDay = getClosestDayOfWeek("Fri");

  const events = Object.keys(state.events).map((id) => state.events[id]);

  const weekEvents = events.filter((event) => {
    const [year, month, day] = event?.date.split("-").map(Number);
    const eventDay = new Date(year, month - 1, day);

    return isBetween(eventDay, startDay, endDay);
  });

  return {
    startDay: +startDay,
    endDay: +endDay,
    events: weekEvents,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(View);
