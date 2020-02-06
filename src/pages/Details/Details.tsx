import * as React from "react";
import { connect } from "react-redux";
import "./Details.scss";

import CargoDetails from "../../components/CargoDetails/CargoDetails";
import EditNameComponent from "../../components/EditNameComponent/EditNameComponent";
import ShipmentDetails from "../../components/ShipmentDetails/ShipmentDetails";

import { IReducerState, IDetailsProps, IDetailsState } from "../../types/types";
import { getShipmentDetails, changeShipmentName } from "../../actions/actions";

export class Details extends React.Component<IDetailsProps, IDetailsState> {
  private nameInput = React.createRef<HTMLInputElement>();
  constructor(props: IDetailsProps) {
    super(props);
    this.state = { showEditForm: false };
    this.changeName = this.changeName.bind(this);
    this.editLinkClickHandler = this.editLinkClickHandler.bind(this);
    this.hideEditName = this.hideEditName.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(getShipmentDetails(id));
  }

  changeName() {
    let shipment = this.props.selectedShipment;
    shipment.name = this.nameInput.current.value;
    this.props.dispatch(changeShipmentName(shipment));
    this.setState({ showEditForm: false });
  }

  editLinkClickHandler(e: React.SyntheticEvent<Element, Event>) {
    e.preventDefault();
    this.setState({ showEditForm: true });
  }

  hideEditName() {
    this.setState({ showEditForm: false });
  }

  render() {
    const { selectedShipment } = this.props;
    return this.props.loading ? (
      <div className="loader-container">Loading...</div>
    ) : (
      <div className="container details-container">
        <h2 className="text-center">
          {selectedShipment?.name}{" "}
          <a
            className="edit-link"
            href="!="
            onClick={e => this.editLinkClickHandler(e)}
          >
            (Edit Name)
          </a>
        </h2>
        {this.state.showEditForm && (
          <EditNameComponent
            shipment={selectedShipment}
            nameInput={this.nameInput}
            changeName={this.changeName}
            cancel={this.hideEditName}
          />
        )}
        <ShipmentDetails shipment={selectedShipment} />
        <CargoDetails cargo={selectedShipment?.cargo} />
      </div>
    );
  }
}

const mapStateToProps = (state: IReducerState) => {
  return {
    ...state,
    selectedShipment: state.selectedShipment
  };
};

export default connect(mapStateToProps)(Details);
