import { shallow } from "enzyme";
import * as React from "react";
import Pagination from "../components/Pagination/Pagination";
import { IPaginationProps } from "../types/types";

describe(">>>P A G I N A T I O N Component", () => {
  const props: IPaginationProps = {
    shipmentsPerPage: 20,
    totalShipments: 50,
    activePage: 1,
    paginate: jest.fn()
  };
  it("+++ render the PAGINATION Componet", () => {
    const wrapper = shallow(<Pagination {...props} />);
    expect(wrapper).toBeTruthy();
  });

  it("+++ should have 3 page-items", () => {
    const wrapper = shallow(<Pagination {...props} />);
    const pageItems = wrapper.find(".page-item");
    expect(pageItems.length).toEqual(3);
  });

  it("+++ should show first item in active", () => {
    const wrapper = shallow(<Pagination {...props} />);
    const pagination = wrapper.find(".pagination");
    expect(
      pagination
        .childAt(0)
        .find("a")
        .hasClass("active")
    ).toBeTruthy();
  });

  it("+++ simulate click on third item", () => {
    const wrapper = shallow(<Pagination {...props} />);
    const thirdPageItem = wrapper
      .find(".pagination")
      .childAt(2)
      .find("a");
    thirdPageItem.simulate("click", { preventDefault: jest.fn() });
    expect(props.paginate).toBeCalledWith(3);
  });
});
