import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("App", () => {
  it("should render given props", () => {
    const props = {
      showInfo: {
        id: 6771,
        image:
          "http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg",
        name: "Powerpuff Girls",
      },
    };
    const component = shallow(<App {...props} />);
    expect(component).toMatchSnapshot();
  });
});
