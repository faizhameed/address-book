import { shallow } from "enzyme";
import ContactDetails from "./ContactDetails";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("Profile Page  ", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <ContactDetails />
      </Provider>
    );
  });

  it("Profile Page is rendered Properly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
