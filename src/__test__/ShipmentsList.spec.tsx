import { shallow } from "enzyme";
import * as React from "react";
import ShipmentsList from "../components/ShipmentsList/ShipmentsList";
import { IShipmentsListProps } from "../types/types";

describe(">>>S H I P M E N T S L I S T Component", () => {
  const props: IShipmentsListProps = {
    loading: false,
    shipments: [
      {
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
      {
        id: "S1001",
        name: "New spring collection(2018)",
        cargo: [],
        mode: "sea",
        type: "FCL",
        destination: "Saarbrücker Str. 38, 10405 Berlin",
        origin: "Ningbo port",
        services: [],
        total: "3000",
        status: "ACTIVE",
        userId: "U1002"
      }
    ]
  };
  it("+++ should render SHIPMENTSLIST Component", () => {
    const wrapper = shallow(<ShipmentsList {...props} />);
    expect(wrapper).toBeTruthy();
  });

  it("+++ should render loader only", () => {
    const props: IShipmentsListProps = {
      loading: true,
      shipments: []
    };
    const wrapper = shallow(<ShipmentsList {...props} />);
    const loader = wrapper.find(".loader-container");
    expect(loader.text()).toEqual("Loading...");
  });

  it("+++ should load all shipments", () => {
    const wrapper = shallow(<ShipmentsList {...props} />);
    const ul = wrapper.find(".list-group");
    expect(ul.children().length).toEqual(2);
  });

  it("+++ no shipments", () => {
    const props: IShipmentsListProps = { loading: false, shipments: [] };
    const wrapper = shallow(<ShipmentsList {...props} />);
    const noItems = wrapper.find(".no-items");
    expect(noItems.text()).toEqual("No Shipments available");
  });
});
