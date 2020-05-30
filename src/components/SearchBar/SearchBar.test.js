import { shallow } from "enzyme";
import SearchBar from "./SearchBar";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("Search bar Component ", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
  });

  it("should render SearchBar component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
