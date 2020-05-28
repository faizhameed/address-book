import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { fetchContactList } from "../../redux/actions";
import Spinner from "../../components/spinner/spinner.component";
const ContactTable = lazy(() => import("../../components/table/contactTable"));

const AddressBook = ({ fetchContactList }) => {
  useEffect(() => {
    fetchContactList();
  }, [fetchContactList]);
  return (
    <div>
      <h2>Address Book</h2>
      <Suspense fallback={<Spinner />}>
        <ContactTable />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchContactList: () => dispatch(fetchContactList()),
});

export default connect(null, mapDispatchToProps)(AddressBook);
