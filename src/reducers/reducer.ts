import { IReducerState, IReducerAction } from "./../types/types";

const intialState: IReducerState = {
  loading: true,
  error: false,
  shipments: [],
  selectedShipment: null
};

export default (state: IReducerState = intialState, action: IReducerAction) => {
  switch (action.type) {
    case "SHOW_LOADER":
      return {
        ...state,
        loading: true
      };
    case "SHOW_ERROR":
      return {
        ...state,
        loading: false,
        error: true
      };
    case "GET_SHIPMENTS_SUCCESS":
      return {
        ...state,
        shipments: action.data,
        loading: false
      };
    case "GET_SELECTED_SHIPEMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        selectedShipment: action.data
      };
    case "CHANGE_SHIPEMENT_NAME_SUCCESS":
      return {
        ...state,
        loading: false,
        selectedShipment: action.data
      };
    default:
      return state;
  }
};
