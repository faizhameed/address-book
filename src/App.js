import React, { lazy, Suspense } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import ErrorBoundary from "./components/ErrorBoundary/error-boundary.component";
import Spinner from "./components/Spinner/spinner.component";
import { connect } from "react-redux";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/GlobalStyles";
import ToggleButton from "./components/ToggleButton/ToggleButton";

/**
 * lazyloading enabled since we dont need all the js in one chunk we are at
 * specific route. This will improve loading times enormously
 */
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
              {/**
               * theme provider enable global access to access the theme props parameter which makes it easier
               * to swtich to dark mode and vice versa
               */}
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
