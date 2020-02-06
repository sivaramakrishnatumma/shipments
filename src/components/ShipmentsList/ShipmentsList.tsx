import * as React from "react";
import { Link } from "react-router-dom";
import "./ShipmentsList.scss";

import { IShipmentsListProps } from "../../types/types";

const ShipmentsList = (props: IShipmentsListProps) => {
  return (
    <React.Fragment>
      {props.loading ? (
        <div className="loader-container">Loading...</div>
      ) : (
        <ul className="list-group">
          {props.shipments.length === 0 ? (
            <div className="no-items">No Shipments available</div>
          ) : (
            props.shipments.map(item => (
              <li
                key={item.id}
                className="list-group-item list-group-item-action"
              >
                <Link to={"details/" + item.id}>{item.name}</Link>
                <span className="status">&nbsp;({item.status})</span>
                <span className="item-right">
                  <span className="light">ID: </span>
                  {item.id}
                </span>
              </li>
            ))
          )}
        </ul>
      )}
    </React.Fragment>
  );
};

export default ShipmentsList;
