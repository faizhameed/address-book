import React, { useEffect, useState, useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../Spinner/spinner.component";
import "./contactTable.scss";
import { updatePageNumber, updatePersonDetailView } from "../../redux/actions";
import { Icon } from "semantic-ui-react";

const ContactTable = ({
  isPending,
  contactList,
  page,
  updatePageNumber,
  updatePersonDetailView,
  mode,
  searchField,
}) => {
  let history = useHistory();
  /*
   * shadow to toggle between dark and light mode
   */
  const [shadow, setShadow] = useState(
    "0px 0px 9px 0px rgba(255, 255, 255, 0.1)"
  );
  const handleDetailView = (person) => {
    updatePersonDetailView(person);
    history.push("contact-detail");
  };

  const observer = useRef();
  /**
   * lastElement is referenced here to fetch the data again in infinte scroll function
   */
  const lastElementRef = useCallback(
    (node) => {
      if (isPending) return;
      /**
       * here is we bascically disconnects from our previous node when lastelementref is changed
       */
      if (observer.current) observer.current.disconnect();
      /**
       * now we are referencing new intersecting node so that we set for next data by updating page number
       */
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          updatePageNumber(page + 1);
        }
      });
      if (node) {
        /**
         * if there is a node we need to observe it when we scroll upto it we can fetch the data again
         */
        observer.current.observe(node);
      }
    },
    [isPending, page, updatePageNumber]
  );
  /**
   * Filter users based on search field data which includes first, last and gender
   */
  const filteredUsers = contactList.filter((person) => {
    let searchIncludes = person.name.first + person.name.last + person.gender;
    return searchIncludes.toLowerCase().includes(searchField.toLowerCase());
  });

  const boxShadow = {
    boxShadow: shadow,
  };
  useEffect(() => {
    if (mode === "dark") setShadow("0px 0px 9px 0px rgba(255, 255, 255, 0.1)");
    else {
      setShadow("0px 0px 9px 0px rgba(0, 0, 0, 0.1)");
    }
  }, [mode]);
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

          {filteredUsers.map((person, index) => {
            if (contactList.length === index + 1 && !searchField) {
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
            } else {
              return (
                <li className="table-row" style={boxShadow} key={index}>
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
  contactListReducer: { isPending, contactList, page, searchField },
  styleReducer: { mode },
}) => ({
  isPending,
  contactList,
  page,
  mode,
  searchField,
});

const mapDispatchToProps = (dispatch) => ({
  updatePageNumber: (page) => dispatch(updatePageNumber(page)),
  updatePersonDetailView: (person) => dispatch(updatePersonDetailView(person)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactTable);
