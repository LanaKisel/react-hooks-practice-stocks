import React, { useState } from "react";

function SearchBar({ onSort,sort, filter, onFilter }) {

  function handleChoice(e) {
    onSort(e.target.value)
  }

  function handleSelectOption(e){
    console.log(e.target.value)
    onFilter(e.target.value)
  }


  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sort === "Alphabetically"}
          onChange={handleChoice}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sort === "Price"}
          onChange={handleChoice}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleSelectOption}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
