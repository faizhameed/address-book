import { shallow } from "enzyme";
import ContactTable from "./contactTable";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("Contact Table Component ", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <ContactTable />
      </Provider>
    );
  });

  it("should render Contact Table component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
