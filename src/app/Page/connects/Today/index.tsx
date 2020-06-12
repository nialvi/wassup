import { connect } from "react-redux";
import { format } from "date-fns";
import Today from "../../../Event/view/Today";
import { addEvent } from "../../../Event/entity/actionsCreators";
import { State } from "../../usecases/reducers";

const mapStateToProps = (state: State) => {
  const { events } = state;
  const today = format(new Date(), "yyyy-MM-dd");
  const todayEvents = Object.keys(events)
    .map((id) => events[id])
    .filter((event) => event.date === today);

  return {
    // TODO add selector
    events: todayEvents,
  };
};

const mapDispatchToProps = {
  addEvent,
};

export default connect(mapStateToProps, mapDispatchToProps)(Today);
