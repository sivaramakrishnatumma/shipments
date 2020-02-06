import { shallow, ShallowWrapper } from "enzyme";
import * as React from "react";

import ShipmentDetails from "../components/ShipmentDetails/ShipmentDetails";
import { IShipmentDetailsProps } from "../types/types";

describe(">>>SHIPMENTDETAILS Component ", () => {
  let props: IShipmentDetailsProps;
  beforeEach(() => {
    props = {
      shipment: {
        id: "S1000",
        name: "T-shirts(Summer2018) from Shanghai to Hamburg",
        cargo: [],
        mode: "sea",
        type: "FCL",
        destination: "Saarbrücker Str. 38, 10405 Berlin",
        origin: "Shanghai Port",
        services: [],
        total: "1000",
        status: "ACTIVE",
        userId: "U1000"
      }
    };
  });
  it("+++ render SHIPMENTDETAILS Component", () => {
    const wrapper: ShallowWrapper = shallow(<ShipmentDetails {...props} />);
    expect(wrapper).toBeTruthy();
  });

  it("+++ test no shipment conditions", () => {
    const props: IShipmentDetailsProps = {
      shipment: null
    };
    const wrapper: ShallowWrapper = shallow(<ShipmentDetails {...props} />);
    expect(wrapper).toBeTruthy();
  });
});
