import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { fetchContactList } from "../../redux/actions";
import Spinner from "../../components/spinner/spinner.component";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
/**
 * code spliting contactTable so that spinner is enabled to improve loading and UX
 */
const ContactTable = lazy(() => import("../../components/table/contactTable"));

const AddressBook = ({ fetchContactList, pageNumber }) => {
  useEffect(() => {
    /**
     * fetch data with page number
     * whenever page number is updated fetch is run automatically
     * we run useEffect for every pagenumber updation
     */
    fetchContactList(pageNumber);
  }, [fetchContactList, pageNumber]);
  return (
    <React.Fragment>
      <Header content={`Address Book`} />
      <div className="main">
        <Suspense fallback={<Spinner />}>
          <SearchBar />
          <h4>New data will not be fetched if search field has values</h4>
          <h3>Click on name to view details</h3>
          <ContactTable />
        </Suspense>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ contactListReducer: { page } }) => ({
  pageNumber: page,
});

const mapDispatchToProps = (dispatch) => ({
  fetchContactList: () => dispatch(fetchContactList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressBook);
