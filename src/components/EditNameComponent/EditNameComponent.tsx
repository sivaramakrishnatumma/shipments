import * as React from "react";
import { IEditNameComponentProps } from "../../types/types";

const EditNameComponent = ({
  shipment,
  nameInput,
  changeName,
  cancel
}: IEditNameComponentProps) => {
  return (
    <div className="form-group row">
      <div className="col-sm-2"></div>
      <input
        className="form-control col-sm-6"
        defaultValue={shipment.name}
        ref={nameInput}
      ></input>
      <div className="col-sm-4">
        <button
          id="save"
          className="btn btn-success"
          onClick={() => changeName()}
        >
          Save
        </button>
        &nbsp;
        <button className="btn btn-danger" onClick={cancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditNameComponent;
