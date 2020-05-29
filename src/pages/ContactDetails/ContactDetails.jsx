import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProfileCard from "../../components/Cards/Card";
import "./ContactDetails.scss";
import { Button } from "semantic-ui-react";

const ContactDetails = ({ person }) => {
  return (
    <div>
      <h2>Contact Details</h2>
      {person ? (
        <div className="container">
          <ProfileCard />
        </div>
      ) : (
        <div>
          <p>Sorry No ContactList selected</p>
        </div>
      )}
      <Button primary>
        <Link style={{ color: "#fff" }} to="/">
          Go Back
        </Link>
      </Button>
    </div>
  );
};

const mapStateToProps = ({ personDetailReducer: { person } }) => ({
  person,
});

export default connect(mapStateToProps)(ContactDetails);
