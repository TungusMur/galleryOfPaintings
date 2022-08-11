import React from "react";
import { useSelector } from "react-redux";
import FilterAuthor from "./components/filterAuthor";

const FilterBar = ({ searchParams, setSearchParams }) => {
  const loading = useSelector((state) => [state.authorReducer.loading]);
  return loading.includes(true) ? (
    <></>
  ) : (
    <div className="filterBar">
      <div>input</div>
      <FilterAuthor
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </div>
  );
};

export default FilterBar;
