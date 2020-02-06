import { shallow } from "enzyme";
import * as React from "react";

import FiltersComponent from "../components/FiltersComponent/FiltersComponent";

describe("FiltersComponent Component", () => {
  const filterChanged = jest.fn();
  it("FiltersComponent component should call filterChanged with 'search_key', 'S100' parameters", () => {
    const wrapper = shallow(<FiltersComponent filterChanged={filterChanged} />);

    const sortBySelectDropdown = wrapper.find("#search_key");
    sortBySelectDropdown.simulate("change", { target: { value: "S100" } });
    expect(filterChanged).toBeCalledWith("search_key", "S100");
  });

  it("FiltersComponent component should call filterChanged with 'order_by', 'name' parameters", () => {
    const wrapper = shallow(<FiltersComponent filterChanged={filterChanged} />);

    const sortBySelectDropdown = wrapper.find("#order_by_select_dropdown");
    sortBySelectDropdown.simulate("change", { target: { value: "name" } });
    expect(filterChanged).toBeCalledWith("order_by", "name");
  });

  it("FiltersComponent component should call filterChanged with 'order', 'desc' parameters", () => {
    const wrapper = shallow(<FiltersComponent filterChanged={filterChanged} />);

    const sortBySelectDropdown = wrapper.find("#order_select_dropdown");
    sortBySelectDropdown.simulate("change", { target: { value: "desc" } });
    expect(filterChanged).toBeCalledWith("order", "desc");
  });
});
