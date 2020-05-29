import React, { useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../spinner/spinner.component";
import "./contactTable.scss";
import { updatePageNumber, updatePersonDetailView } from "../../redux/actions";
import { Icon } from "semantic-ui-react";

const ContactTable = ({
  isPending,
  contactList,
  page,
  updatePageNumber,
  updatePersonDetailView,
}) => {
  let history = useHistory();

  const handleDetailView = (person) => {
    updatePersonDetailView(person);
    history.push("contact-detail");
  };

  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (isPending) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          updatePageNumber(page + 1);
          console.log(entries[0]);
        }
      });
      if (node) {
        console.log(node);
        observer.current.observe(node);
      }
    },
    [isPending, page, updatePageNumber]
  );

  return (
    <div className="container-table">
      {contactList.length > 0 ? (
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Name</div>
            <div className="col col-2">Gender</div>
            <div className="col col-3">Email</div>
            <div className="col col-4">Contact</div>
          </li>

          {contactList.map((person, index) => {
            if (contactList.length === index + 1) {
              return (
                <li className="table-row" ref={lastElementRef} key={index}>
                  <div
                    onClick={() => handleDetailView(person)}
                    data-label="Name"
                    component="th"
                    scope="row"
                    className="clickable col col-1"
                  >
                    {person.name.first + " " + person.name.last}
                  </div>
                  <div className="col col-2" data-label="Gender">
                    {person.gender}
                  </div>
                  <div className="col col-3" data-label="Email">
                    {person.email}
                  </div>
                  <div className="col col-4" data-label="Phone">
                    {person.phone}
                  </div>
                </li>
              );
            } else {
              return (
                <li className="table-row" key={index}>
                  <div
                    onClick={() => handleDetailView(person)}
                    data-label="Name"
                    component="th"
                    scope="row"
                    className="clickable col col-1"
                  >
                    {person.name.first + " " + person.name.last + " "}
                    <Icon name="eye" />
                  </div>
                  <div className="col col-2" data-label="Gender">
                    {person.gender}
                  </div>
                  <div className="col col-3" data-label="Email">
                    {person.email}
                  </div>
                  <div className="col col-4" data-label="Phone">
                    {person.phone}
                  </div>
                </li>
              );
            }
          })}
        </ul>
      ) : null}
      {isPending && page < 11 ? <Spinner /> : null}
    </div>
  );
};
const mapStateToProps = ({
  contactListReducer: { isPending, contactList, page },
}) => ({
  isPending,
  contactList,
  page,
});

const mapDispatchToProps = (dispatch) => ({
  updatePageNumber: (page) => dispatch(updatePageNumber(page)),
  updatePersonDetailView: (person) => dispatch(updatePersonDetailView(person)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactTable);
