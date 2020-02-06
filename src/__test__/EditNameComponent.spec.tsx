import { shallow, ShallowWrapper } from "enzyme";
import * as React from "react";

import EditNameComponent from "../components/EditNameComponent/EditNameComponent";
import { IEditNameComponentProps } from "../types/types";

describe(">>>E D I T N A M E Component", () => {
  let props: IEditNameComponentProps;
  let wrapper: ShallowWrapper;

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
      },
      nameInput: null,
      changeName: jest.fn(),
      cancel: jest.fn()
    };
  });

  it("+++ render EDITNAME Component", () => {
    wrapper = shallow(<EditNameComponent {...props} />);
    expect(wrapper).toBeTruthy();
  });

  it("+++ save button click", () => {
    wrapper.find("#save").simulate("click", {});
  });

  it("+++ cancel button click", () => {
    wrapper.find(".btn-danger").simulate("click");
  });
});
