import {
  showLoader,
  showError,
  getShipments,
  getShipmentsSuccess,
  getShipmentDetails,
  getSelectedShipmentSuccess,
  changeShipmentName,
  changeShipmentNameSuccess
} from "../actions/actions";
import {} from "../actions/actions";

describe(">>>A C T I O N --- Test shipmentsActions", () => {
  it("+++ actionCreator showLoader", () => {
    const add = showLoader();
    expect(add).toEqual({ type: "SHOW_LOADER" });
  });

  it("+++ actionCreator showError", () => {
    const subtract = showError();
    expect(subtract).toEqual({ type: "SHOW_ERROR" });
  });

  it("+++ actionCreator getShipments", () => {
    const subtract = getShipments();
    expect(subtract).toEqual({ type: "GET_SHIPMENTS" });
  });

  it("+++ actionCreator getShipmentsSuccess", () => {
    const subtract = getShipmentsSuccess([]);
    expect(subtract).toEqual({ type: "GET_SHIPMENTS_SUCCESS", data: [] });
  });

  it("+++ actionCreator getShipmentDetails", () => {
    const subtract = getShipmentDetails("S1002");
    expect(subtract).toEqual({ type: "GET_SHIPMENT_DETAILS", id: "S1002" });
  });

  it("+++ actionCreator getSelectedShipmentSuccess", () => {
    const subtract = getSelectedShipmentSuccess(null);
    expect(subtract).toEqual({
      type: "GET_SELECTED_SHIPEMENT_SUCCESS",
      data: null
    });
  });

  it("+++ actionCreator changeShipmentName", () => {
    const subtract = changeShipmentName(null);
    expect(subtract).toEqual({ type: "CHANGE_SHIPMENT_NAME", shipment: null });
  });

  it("+++ actionCreator changeShipmentNameSuccess", () => {
    const subtract = changeShipmentNameSuccess(null);
    expect(subtract).toEqual({
      type: "CHANGE_SHIPEMENT_NAME_SUCCESS",
      data: null
    });
  });
});
