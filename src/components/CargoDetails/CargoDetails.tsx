import * as React from "react";
import { ICargoDetailsProps } from "../../types/types";

const CargoDetails = ({ cargo }: ICargoDetailsProps) => {
  return cargo ? (
    <>
      <h4 className="text-center top-margin">Cargo Details</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {cargo.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.type}</td>
                <td>{item.description}</td>
                <td>{item.volume}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  ) : (
    <div className="no-items-msg text-center">No Cargo items available</div>
  );
};

export default CargoDetails;
