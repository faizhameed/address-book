import React, { useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../spinner/spinner.component";
import "./contactTable.scss";
import { updatePageNumber, updatePersonDetailView } from "../../redux/actions";

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
    <div>
      {contactList.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>SI.No</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {contactList.map((person, index) => {
              if (contactList.length === index + 1) {
                return (
                  <tr ref={lastElementRef} key={index}>
                    <td data-label="SI.No" component="th" scope="row">
                      {index + 1}
                    </td>
                    <td
                      onClick={() => handleDetailView(person)}
                      data-label="Name"
                      component="th"
                      scope="row"
                    >
                      {person.name.first + " " + person.name.last}
                    </td>
                    <td data-label="Gender">{person.gender}</td>
                    <td data-label="DOB">{person.dob.age}</td>
                    <td data-label="Email">{person.email}</td>
                    <td data-label="Phone">{person.phone}</td>
                  </tr>
                );
              } else {
                return (
                  <tr key={index}>
                    <td data-label="SI.No" component="th" scope="row">
                      {index + 1}
                    </td>
                    <td
                      onClick={() => handleDetailView(person)}
                      data-label="Name"
                      component="th"
                      scope="row"
                    >
                      {person.name.first + " " + person.name.last}
                    </td>
                    <td data-label="Gender">{person.gender}</td>
                    <td data-label="DOB">{person.dob.age}</td>
                    <td data-label="Email">{person.email}</td>
                    <td data-label="Phone">{person.phone}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
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
