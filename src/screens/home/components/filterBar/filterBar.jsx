import React from "react";
import { useSelector } from "react-redux";
import FilterAuthor from "./components/filterAuthor";
import FilterLocation from "./components/filterLocation";
import FilterName from "./components/filterName";
import FilterDate from "./components/filterDate";

const FilterBar = ({ searchParams, setSearchParams }) => {
  const loading = useSelector((state) => [
    state.authorReducer.loading,
    state.locationReducer.loading,
  ]);
  return loading.includes(true) ? (
    <></>
  ) : (
    <div className="filterBar">
      <FilterName
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <FilterAuthor
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <FilterLocation
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <FilterDate
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </div>
  );
};

export default FilterBar;
