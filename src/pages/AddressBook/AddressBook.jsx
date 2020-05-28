import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { fetchContactList } from "../../redux/actions";
import Spinner from "../../components/spinner/spinner.component";
const ContactTable = lazy(() => import("../../components/table/contactTable"));

const AddressBook = ({ fetchContactList, pageNumber }) => {
  useEffect(() => {
    fetchContactList(pageNumber);
  }, [fetchContactList, pageNumber]);
  return (
    <div>
      <h2>Address Book</h2>
      <Suspense fallback={<Spinner />}>
        <ContactTable />
      </Suspense>
    </div>
  );
};

const mapStateToProps = ({ contactListReducer: { page } }) => ({
  pageNumber: page,
});

const mapDispatchToProps = (dispatch) => ({
  fetchContactList: () => dispatch(fetchContactList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressBook);
