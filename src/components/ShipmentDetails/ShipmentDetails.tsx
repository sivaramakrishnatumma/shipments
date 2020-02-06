import * as React from "react";
import { IShipmentDetailsProps } from "../../types/types";

const ShipmentDetails = ({ shipment }: IShipmentDetailsProps) => {
  return (
    <table className="table table-bordered main-table">
      <tbody>
        <tr>
          <td>ID</td>
          <td>{shipment?.id}</td>
        </tr>
        <tr>
          <td>Origin</td>
          <td>{shipment?.origin}</td>
        </tr>
        <tr>
          <td>Destination</td>
          <td>{shipment?.destination}</td>
        </tr>
        <tr>
          <td>Mode</td>
          <td>{shipment?.mode}</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>{shipment?.status}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{shipment?.total}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default ShipmentDetails;
