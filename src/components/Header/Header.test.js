import { shallow } from "enzyme";
import Header from "./Header";
import React from "react";

describe("Header Component ", () => {
  let wrapper;
  let mockData = "Test Page for Header";
  beforeEach(() => {
    wrapper = shallow(<Header content={mockData} />);
  });

  it("should render Header component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
