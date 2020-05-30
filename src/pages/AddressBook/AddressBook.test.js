import { shallow } from "enzyme";
import AddressBook from "./AddressBook";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("Address Book  ", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <AddressBook />
      </Provider>
    );
  });

  it("Address Book Page is rendered Properly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
