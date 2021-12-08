import React from "react";
import PropTypes from "prop-types";
import { Input } from "reactstrap";

import Rating from "../Components/Rating";


const SearchBar = ({ handleSearch, setRatingSearch, ratingSearch }) => {
  return (
    <div className="row" style={{ flexWrap: "nowrap" }}>
      <div className="col-md-12">
        <Input
          type="text"
          placeholder="enter the title you search"
          onChange={handleSearch}
        />
      </div>

      <div className="col-md-4">
        <Rating
          className="star-rating"
          starIndex={setRatingSearch}
          rating={ratingSearch}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
