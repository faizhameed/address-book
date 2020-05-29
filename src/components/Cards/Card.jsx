import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import moment from "moment";
import "./Card.scss";

const ProfileCard = ({ person }) => (
  <Card>
    <Image id="profile-image" src={person.picture.large} wrapped ui />

    <Card.Content>
      <Card.Header>{person.name.first + " " + person.name.last}</Card.Header>
      <Card.Meta>{`Joined in ${moment(person.registered.date).format(
        "MMM Do YYYY"
      )}`}</Card.Meta>
      <Card.Description>
        <div className="grid-view">
          <h5 style={{ margin: 0 }}>Address</h5>
          <p>{`${person.location.street.name}, ${person.location.street.number},`}</p>
          <p>
            {` ${person.location.city}, ${person.location.state}, ${person.location.country}`}
          </p>
        </div>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href={`mailto:${person.email}`}>
        <Icon name="mail" />
        <p>{person.email}</p>
        <p>{person.phone}</p>
      </a>
    </Card.Content>
  </Card>
);
const mapStateToProps = ({ personDetailReducer: { person } }) => ({
  person,
});
export default connect(mapStateToProps)(ProfileCard);
