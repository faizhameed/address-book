import { shallow } from "enzyme";
import ProfileCard from "./Card";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("Profile Card Component ", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <ProfileCard />
      </Provider>
    );
  });

  it("should render profileCard component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
