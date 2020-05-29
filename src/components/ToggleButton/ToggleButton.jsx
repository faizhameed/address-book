import React from "react";
import "./ToggleButton.scss";
import { connect } from "react-redux";
import { toggleDarkMode } from "../../redux/actions";

const ToggleButton = ({ toggleColorMode }) => {
  const checkFun = () => {
    console.log("toggle button working");
    toggleColorMode();
  };
  return (
    <div>
      <label className="switch">
        <input type="checkbox" />
        <span onClick={checkFun} className="knob"></span>
      </label>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleColorMode: () => dispatch(toggleDarkMode()),
});

export default connect(null, mapDispatchToProps)(ToggleButton);
