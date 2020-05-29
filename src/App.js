import React, { lazy, Suspense } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Spinner from "./components/spinner/spinner.component";
import { connect } from "react-redux";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/GlobalStyles";
import ToggleButton from "./components/ToggleButton/ToggleButton";
const ContactDetails = lazy(() =>
  import("./pages/ContactDetails/ContactDetails")
);
const AddressBook = lazy(() => import("./pages/AddressBook/AddressBook"));

function App({ globalMode }) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <ThemeProvider theme={{ mode: globalMode }}>
                <GlobalStyles />
                <ToggleButton />
                <div style={{ position: "relative", top: "24em" }}>
                  {globalMode === "dark" ? (
                    <h2>Switch to Light Mode</h2>
                  ) : (
                    <h2>Switch to Dark Mode</h2>
                  )}
                </div>
                <Route exact path="/" component={AddressBook} />
                <Route path="/contact-detail" component={ContactDetails} />
              </ThemeProvider>
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = ({ styleReducer: { mode } }) => ({
  globalMode: mode,
});

export default connect(mapStateToProps)(App);
