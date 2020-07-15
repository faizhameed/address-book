import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";
/**
 * fall back component when the component is loading
 */
const Spinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default Spinner;
