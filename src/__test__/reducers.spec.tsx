import reducers from "../reducers/reducer";
import { IReducerState } from "../types/types";

describe(">>>R E D U C E R --- Test shipmentsReducers", () => {
  let intialState: IReducerState;
  beforeEach(() => {
    intialState = {
      loading: true,
      error: false,
      shipments: [],
      selectedShipment: null
    };
  });

  it("+++ reducer for SHOW_LOADER", () => {
    let state = intialState;
    state.loading = false;
    state = reducers(state, { type: "SHOW_LOADER" });
    expect(state.loading).toBeTruthy();
  });

  it("+++ reducer for SHOW_ERROR", () => {
    let state = intialState;
    state = reducers(state, { type: "SHOW_ERROR" });
    expect(state.error).toBeTruthy();
  });

  it("+++ reducer for GET_SHIPMENTS_SUCCESS", () => {
    let state = intialState;
    state = reducers(state, { type: "GET_SHIPMENTS_SUCCESS", data: [] });
    expect(state.loading).toBeFalsy();
    expect(state.shipments.length).toBe(0);
  });

  it("+++ reducer for GET_SELECTED_SHIPEMENT_SUCCESS", () => {
    let state = intialState;
    state = reducers(state, {
      type: "GET_SELECTED_SHIPEMENT_SUCCESS",
      data: { id: "S1001" }
    });
    expect(state.loading).toBeFalsy();
    expect(state.selectedShipment.id).toBe("S1001");
  });

  it("+++ reducer for CHANGE_SHIPEMENT_NAME_SUCCESS", () => {
    let state = intialState;
    state = reducers(state, {
      type: "CHANGE_SHIPEMENT_NAME_SUCCESS",
      data: { id: "S1001", name: "New Name" }
    });
    expect(state.loading).toBeFalsy();
    expect(state.selectedShipment.id).toBe("S1001");
    expect(state.selectedShipment.name).toBe("New Name");
  });

  it("+++ test default case", () => {
    let state = intialState;
    state = reducers(state, {
      type: ""
    });
    expect(state.loading).toEqual(intialState.loading);
    expect(state.error).toEqual(intialState.error);
    expect(state.shipments.length).toBe(intialState.shipments.length);
    expect(state.selectedShipment).toBe(intialState.selectedShipment);
  });

  it("+++ test reducer without state", () => {
    let state = intialState;
    state = reducers(undefined, {
      type: ""
    });
    expect(state.loading).toEqual(intialState.loading);
    expect(state.error).toEqual(intialState.error);
    expect(state.shipments.length).toBe(intialState.shipments.length);
    expect(state.selectedShipment).toBe(intialState.selectedShipment);
  });
});
