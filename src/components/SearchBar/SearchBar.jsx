import React, { useEffect, useState } from "react";
import { Search } from "semantic-ui-react";
import _ from "lodash";
import { connect } from "react-redux";
import { searchFieldChange } from "../../redux/actions";

const SearchBar = ({ searchFieldChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = _.debounce(setSearchTerm, 200);

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchFieldChange(searchTerm);
    }
  }, [debouncedSearchTerm, searchFieldChange]);

  return (
    <div>
      <Search
        open={false}
        onSearchChange={(e) => debouncedSearchTerm(e.target.value)}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchFieldChange: (data) => dispatch(searchFieldChange(data)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
