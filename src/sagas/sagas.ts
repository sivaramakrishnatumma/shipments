import { put, takeEvery, all, call } from "redux-saga/effects";
import axios from "axios";
import {
  showLoader,
  getShipmentsSuccess,
  getSelectedShipmentSuccess,
  changeShipmentNameSuccess,
  showError
} from "../actions/actions";
import { IReducerAction } from "../types/types";

const baseURL = "http://localhost:3000";

// Sagas
function* watchFetchShipments() {
  yield takeEvery("GET_SHIPMENTS", fetchShipmentsAsync);
}

function* fetchShipmentsAsync() {
  try {
    yield put(showLoader());
    const res = yield call(() => axios(`${baseURL}/shipments`));
    yield put(getShipmentsSuccess(res.data));
  } catch (error) {
    yield put(showError());
  }
}

function* watchFetchSelectedShipment() {
  yield takeEvery("GET_SHIPMENT_DETAILS", fetchSelectedShipmentAsync);
}

function* fetchSelectedShipmentAsync(action: IReducerAction) {
  try {
    yield put(showLoader());
    const res = yield call(() => axios(`${baseURL}/shipments/${action.id}`));
    yield put(getSelectedShipmentSuccess(res.data));
  } catch (error) {
    yield put(showError());
  }
}

function* watchChangeShipmentName() {
  console.log("watchChangeShipmentName");
  yield takeEvery("CHANGE_SHIPMENT_NAME", changeShipmentNameAsync);
}

function* changeShipmentNameAsync(action: IReducerAction) {
  console.log("changeShipmentNameAsync", action);
  try {
    yield put(showLoader());
    const res = yield call(() =>
      axios({
        method: "put",
        url: `${baseURL}/shipments/${action.shipment.id}`,
        data: action.shipment
      })
    );
    yield put(changeShipmentNameSuccess(res.data));
  } catch (error) {
    yield put(showError());
  }
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchFetchShipments(),
    watchFetchSelectedShipment(),
    watchChangeShipmentName()
  ]);
}
