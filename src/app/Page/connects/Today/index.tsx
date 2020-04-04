import { connect } from "react-redux";
import Today from "../../../Event/view/Today";
import { addEvent } from "../../../Event/entity/actionsCreators";
import { State } from "../../usecases/reducers";

const mapStateToProps = (state: State) => ({
  events: state.events,
});

const mapDispatchToProps = {
  addEvent,
};

export default connect(mapStateToProps, mapDispatchToProps)(Today);
