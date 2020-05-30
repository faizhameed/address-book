import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProfileCard from "../../components/Cards/Card";
import "./ContactDetails.scss";
import { Button } from "semantic-ui-react";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet";

const ContactDetails = ({ person }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Address Book| Idea</title>
        <meta
          name="description"
          content="Address Book-fetch users from Api, search users and see user profile"
        />
      </Helmet>
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
          <Button style={{ margin: "10px 0 20px" }} primary>
            Go Back
          </Button>
        </Link>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ personDetailReducer: { person } }) => ({
  person,
});

export default connect(mapStateToProps)(ContactDetails);
