import React from "react";
import Spinner from "../spinner/spinner.component";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  //high order component on for component and other its parameters
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};
export default WithSpinner;
