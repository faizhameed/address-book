import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProfileCard from "../../components/Cards/Card";
import "./ContactDetails.scss";
import { Button } from "semantic-ui-react";
import Header from "../../components/Header/Header";

const ContactDetails = ({ person }) => {
  return (
    <React.Fragment>
      <Header content={`Profile`} />
      <div className="main">
        {person ? (
          <div className="container">
            <ProfileCard />
          </div>
        ) : (
          <div>
            <p>Sorry No ContactList selected</p>
          </div>
        )}
        {/**
         * Go back to address table
         */}
        <Link style={{ color: "#fff" }} to="/">
          <Button primary>Go Back</Button>
        </Link>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ personDetailReducer: { person } }) => ({
  person,
});

export default connect(mapStateToProps)(ContactDetails);
