import { shallow } from "enzyme";
import * as React from "react";

import Header from "../components/Header/Header";

describe("Header Component", () => {
  it("header component should render title", () => {
    const wrapper = shallow(<Header />);
    const el = wrapper.find(".header-container");
    expect(el.length).toBe(1);
    const h1El = wrapper.find("h1");
    expect(h1El.text()).toEqual("Shipment Tracking System");
  });
});
