import { IShipment } from "./../types/types";
export const showLoader = () => {
  return {
    type: "SHOW_LOADER"
  };
};

export const showError = () => {
  return {
    type: "SHOW_ERROR"
  };
};

export const getShipments = () => {
  return {
    type: "GET_SHIPMENTS"
  };
};

export const getShipmentsSuccess = (data: Array<IShipment>) => {
  return {
    type: "GET_SHIPMENTS_SUCCESS",
    data: data
  };
};

export const getShipmentDetails = (id: string) => {
  return {
    type: "GET_SHIPMENT_DETAILS",
    id
  };
};

export const getSelectedShipmentSuccess = (data: IShipment) => {
  return {
    type: "GET_SELECTED_SHIPEMENT_SUCCESS",
    data
  };
};

export const changeShipmentName = (shipment: IShipment) => {
  return {
    type: "CHANGE_SHIPMENT_NAME",
    shipment
  };
};

export const changeShipmentNameSuccess = (data: IShipment) => {
  return {
    type: "CHANGE_SHIPEMENT_NAME_SUCCESS",
    data
  };
};
