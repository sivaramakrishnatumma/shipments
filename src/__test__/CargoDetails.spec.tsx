import { shallow } from "enzyme";
import * as React from "react";
import CargoDetails from "../components/CargoDetails/CargoDetails";
import { ICargo } from "../types/types";

describe("CargoDetails components", () => {
  const cargoItems: Array<ICargo> = [
    {
      type: "Fabric",
      description: "1000 Blue T-shirts",
      volume: "2"
    },
    {
      type: "Fabric",
      description: "2000 Green T-shirts",
      volume: "3"
    }
  ];

  it("check cargo details", () => {
    const wrapper = shallow(<CargoDetails cargo={cargoItems} />);
    expect(wrapper.props().children.length).toEqual(2);

    const tr = wrapper.find("tr");
    expect(tr.length).toBe(3);
    expect(
      wrapper
        .find("tbody")
        .childAt(0)
        .childAt(0)
        .text()
    ).toBe("Fabric");

    expect(
      wrapper
        .find("tbody")
        .childAt(0)
        .childAt(1)
        .text()
    ).toBe("1000 Blue T-shirts");

    expect(
      wrapper
        .find("tbody")
        .childAt(0)
        .childAt(2)
        .text()
    ).toBe("2");
  });

  it("+++ check without cargo details", function() {
    const cargoItems: Array<ICargo> = null;
    const wrapper = shallow(<CargoDetails cargo={cargoItems} />);
    const tr = wrapper.find("tr");
    expect(tr.length).toBe(0);

    const noCargoMsg = wrapper.find(".no-items-msg");
    expect(noCargoMsg.text()).toEqual("No Cargo items available");
  });
});
