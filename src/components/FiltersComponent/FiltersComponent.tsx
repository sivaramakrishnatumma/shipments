import * as React from "react";
import { IFiltersComponentProps } from "../../types/types";

const FiltersComponent = ({ filterChanged }: IFiltersComponentProps) => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Shipment ID"
            id="search_key"
            onChange={e => {
              filterChanged("search_key", e.target.value);
            }}
          />
        </div>
      </div>
      <div className="col-sm-6">
        <form className="form-inline item-left">
          <div className="form-group full-width">
            <label>Sort by</label>&nbsp;
            <select
              className="form-control"
              id="order_by_select_dropdown"
              onChange={e => filterChanged("order_by", e.target.value)}
            >
              <option value="id">Shipment ID</option>
              <option value="name">Shipment Name</option>
              <option value="status">Status</option>
            </select>
            &nbsp;
            <select
              className="form-control"
              id="order_select_dropdown"
              onChange={e => filterChanged("order", e.target.value)}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FiltersComponent;
