import React, { useState } from "react";
import ButtonActiveFilter from "@shared/buttonActiveFilter";
import ButtonResetFilter from "@shared/buttonResetFilter";
import { useEffect } from "react";

const FilterDate = ({ searchParams, setSearchParams }) => {
  const [created, setCreated] = useState({ gte: "", lte: "" });

  useEffect(() => {
    searchParams.append("created", 2000);
    searchParams.append("created", 2010);
    setSearchParams(searchParams);
  }, []);

  return (
    <div className="filterDate">
      <div className="filterLocation-action">
        {/* <ButtonActiveFilter
          setActive={setActive}
          content={
            locationData.data.filter(
              (item) => +searchParams.getAll("created") === item.id
            )[0]?.location || "Location"
          }
        />
        {searchParams.get("locationId") && (
          <ButtonResetFilter
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            property="locationId"
          />
        )} */}
      </div>
    </div>
  );
};

export default FilterDate;
