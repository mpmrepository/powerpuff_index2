import React from "react";
import { shallow } from "enzyme";
import EpisodeComponent from "../episode.component";

describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<EpisodeComponent debug />);

    expect(component).toMatchSnapshot();
  });
});
