import * as React from "react";
import { connect } from "react-redux";
import { orderBy } from "lodash";
import "./Home.scss";

import Pagination from "../../components/Pagination/Pagination";
import ShipmentsList from "../../components/ShipmentsList/ShipmentsList";
import FiltersComponent from "../../components/FiltersComponent/FiltersComponent";

import { getShipments } from "../../actions/actions";
import { IHomeState, IHomeProps, IReducerState } from "../../types/types";

export class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      shipments: [],
      currentPage: 1,
      shipmentsPerPage: 20,
      searchKey: "",
      orderByKey: "id",
      order: "asc"
    };
    this.paginate = this.paginate.bind(this);
    this.filterChanged = this.filterChanged.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getShipments());
  }

  paginate(number: number) {
    this.setState({
      currentPage: number
    });
  }

  filterChanged(key: string, value: string) {
    switch (key) {
      case "search_key":
        this.setState({
          searchKey: value
        });
        break;
      case "order_by":
        this.setState({
          orderByKey: value
        });
        break;
      case "order":
        this.setState({
          order: value === "asc" ? "asc" : "desc"
        });
        break;
    }
  }

  render() {
    const {
      currentPage,
      shipmentsPerPage,
      searchKey,
      orderByKey,
      order
    } = this.state;
    const { shipments, loading } = this.props;
    const indexOfLastShipment = currentPage * shipmentsPerPage;
    const indexOfFirstShipment = indexOfLastShipment - shipmentsPerPage;
    const filteredShipments = shipments.filter(
      item => item.id.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1
    );
    const currentShipments = orderBy(
      filteredShipments,
      orderByKey,
      order
    ).slice(indexOfFirstShipment, indexOfLastShipment);

    return (
      <div className="container-fluid">
        <FiltersComponent filterChanged={this.filterChanged}></FiltersComponent>
        <ShipmentsList shipments={currentShipments} loading={loading} />
        <Pagination
          shipmentsPerPage={shipmentsPerPage}
          totalShipments={filteredShipments.length}
          activePage={currentPage}
          paginate={this.paginate}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: IReducerState) => {
  return {
    ...state,
    shipments: state.shipments
  };
};

export default connect(mapStateToProps)(Home);
