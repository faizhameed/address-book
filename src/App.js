import React, { lazy, Suspense, useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import WithSpinner from "./components/with-spinner/with-spinner.component";
const ContactDetails = lazy(() =>
  import("./pages/ContactDetails/ContactDetails")
);
const AddressBook = lazy(() => import("./pages/AddressBook/AddressBook"));

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<WithSpinner />}>
              <Route exact path="/" component={AddressBook} />
              <Route path="/contact-details" component={ContactDetails} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
