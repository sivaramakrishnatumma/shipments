import * as React from "react";
import { Provider } from "react-redux";
import { mount, ReactWrapper } from "enzyme";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { getShipments } from "../actions/actions";
import { IReducerState } from "../types/types";

import ConnectedHome, { Home } from "../pages/Home/Home";

describe(">>>HOME Component", () => {
  const initialState: IReducerState = {
    loading: true,
    error: false,
    shipments: [
      {
        id: "S1000",
        name: "T-shirts(Summer2018) from Shanghai to Hamburg",
        cargo: [
          {
            type: "Fabric",
            description: "1000 Blue T-shirts",
            volume: "2"
          },
          {
            type: "Fabric",
            description: "2000 Green T-shirts",
            volume: "3"
          }
        ],
        mode: "sea",
        type: "FCL",
        destination: "Saarbrücker Str. 38, 10405 Berlin",
        origin: "Shanghai Port",
        services: [
          {
            type: "customs"
          }
        ],
        total: "1000",
        status: "ACTIVE",
        userId: "U1000"
      }
    ],
    selectedShipment: null
  };
  const mockStore = configureStore();
  let store: MockStoreEnhanced<any>, root: ReactWrapper, wrapper: any;
  beforeEach(() => {
    store = mockStore(initialState);
    root = mount(
      <Provider store={store}>
        <ConnectedHome />
      </Provider>
    );
    wrapper = root.find(Home);
  });

  it("+++render the connected(HOME) component", () => {
    expect(root.find(ConnectedHome)).toBeTruthy();
  });

  it("+++check Prop matches with initialState", () => {
    expect(wrapper.prop("loading")).toEqual(initialState.loading);
    expect(wrapper.prop("error")).toEqual(initialState.error);
    expect(wrapper.prop("shipments").length).toEqual(
      initialState.shipments.length
    );
    expect(wrapper.prop("selectedShipment")).toEqual(
      initialState.selectedShipment
    );
  });

  it("+++ check action on dispatching ", () => {
    let action;
    store.dispatch(getShipments());
    action = store.getActions();
    expect(action[0].type).toBe("GET_SHIPMENTS");
  });

  it("+++ check paginate method", () => {
    wrapper.instance().paginate(3);
    expect(wrapper.state("currentPage")).toEqual(3);
  });

  it("+++ check paginate method", () => {
    wrapper.instance().paginate(3);
    expect(wrapper.state("currentPage")).toEqual(3);
  });

  it("+++ check filterChanged method with search_key and S1002", () => {
    wrapper.instance().filterChanged("search_key", "S1002");
    expect(wrapper.state("searchKey")).toEqual("S1002");
  });

  it("+++ check filterChanged method with order_by and name", () => {
    wrapper.instance().filterChanged("order_by", "name");
    expect(wrapper.state("orderByKey")).toEqual("name");
  });

  it("+++ check filterChanged method with order and desc", () => {
    wrapper.instance().filterChanged("order", "desc");
    expect(wrapper.state("order")).toEqual("desc");
  });

  it("+++ check filterChanged method with order and asc", () => {
    wrapper.instance().filterChanged("order", "asc");
    expect(wrapper.state("order")).toEqual("asc");
  });
});
