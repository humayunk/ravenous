import React from "react";

function SearchBar() {
  return (
    <form>
      <div className="searchInputs">
        <input
          placeholder="Search Businesses"
          aria-label="Search businesses" // Accessibility improvement
        />
        <input
          placeholder="Where?"
          aria-label="Location" // Accessibility improvement
        />
      </div>
      <div className="sortingOptions">
        <label htmlFor="sort">Sort by:</label> {/* Accessibility improvement */}
        <select id="sort" aria-label="Sort options">
          {" "}
          {/* Accessibility improvement */}
          <option value="best_match">Best Match</option>
          <option value="rating">Highest Rated</option>
          <option value="review_count">Most Reviewed</option>
        </select>
      </div>
      <button type="submit">Let's Go</button>
    </form>
  );
}

export default SearchBar;
