import * as React from "react";
import { Provider } from "react-redux";
import { mount, ReactWrapper } from "enzyme";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { IReducerState } from "../types/types";
import { getMockRouterProps } from "../../__mocks__/routerMock";

import ConnectedDetails, { Details } from "../pages/Details/Details";

describe(">>>DETAILS Component", () => {
  const initialState: IReducerState = {
    loading: false,
    error: false,
    shipments: [],
    selectedShipment: {
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
  };
  const mockStore = configureStore();
  let store: MockStoreEnhanced<any>, root: ReactWrapper, wrapper: any;
  beforeEach(() => {
    store = mockStore(initialState);
    const routerProps = getMockRouterProps<any>(null);
    root = mount(
      <Provider store={store}>
        <ConnectedDetails
          history={routerProps.history}
          location={routerProps.location}
          match={{ params: { id: "S1002" }, isExact: true, path: "", url: "" }}
        />
      </Provider>
    );
    wrapper = root.find(Details);
  });

  it("+++ render the connected(DETAILS) component", () => {
    expect(root.find(ConnectedDetails)).toBeTruthy();
  });

  it("+++ change name method should dispatch new name", () => {
    let action;
    wrapper.instance().nameInput = { current: { value: "new Name" } };
    wrapper.instance().changeName();
    action = store.getActions();
    expect(action[1].type).toBe("CHANGE_SHIPMENT_NAME");
  });

  it("+++ handle edit name link click method", () => {
    const link = wrapper.find(".edit-link");
    link.simulate("click", { preventDefault: jest.fn() });
    expect(wrapper.state("showEditForm")).toBeTruthy();
  });

  it("+++ hide edit form when Cancel button is clicked", () => {
    wrapper.instance().hideEditName();
    expect(wrapper.state("showEditForm")).toBeFalsy();
  });

  it("+++ should show loader at the start", () => {
    const routerProps = getMockRouterProps<any>(null);
    store = mockStore({ loading: true });
    const root = mount(
      <Provider store={store}>
        <ConnectedDetails
          history={routerProps.history}
          location={routerProps.location}
          match={{ params: { id: "S1002" }, isExact: true, path: "", url: "" }}
        />
      </Provider>
    );
    const loader = root.find(Details).find(".loader-container");
    expect(loader.text()).toEqual("Loading...");
  });

  it("+++ should render page without shipment details", () => {
    const routerProps = getMockRouterProps<any>(null);
    store = mockStore({ loading: false });
    const root = mount(
      <Provider store={store}>
        <ConnectedDetails
          history={routerProps.history}
          location={routerProps.location}
          match={{ params: { id: "S1002" }, isExact: true, path: "", url: "" }}
        />
      </Provider>
    );
  });
});
