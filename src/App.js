import React, { lazy, Suspense } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Spinner from "./components/spinner/spinner.component";
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
            <Suspense fallback={<Spinner />}>
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
