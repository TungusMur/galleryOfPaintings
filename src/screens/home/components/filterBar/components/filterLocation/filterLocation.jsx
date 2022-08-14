import React, { useState, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import ButtonActiveFilter from "@shared/buttonActiveFilter";
import ButtonResetFilter from "@shared/buttonResetFilter";
import FilterForm from "@shared/filterForm";
import { useOutsideClick } from "@helpers";
import "./styles.scss";

const FilterLocation = ({ searchParams, setSearchParams }) => {
  const [active, setActive] = useState(false);
  const locationData = useSelector((state) => state.locationReducer);
  const filterRef = useRef(null);
  const handlerClick = useCallback(() => {
    if (active) {
      setActive(false);
    }
  }, [active]);

  useOutsideClick(filterRef, handlerClick);

  return (
    <div
      className={`filterLocation filterItem ${active ? "active" : ""}`}
      ref={filterRef}
    >
      <div
        className={`filterLocation-action filterItem-action ${
          active ? "active" : ""
        }`}
      >
        <ButtonActiveFilter
          setActive={setActive}
          content={
            locationData.data.filter(
              (item) => +searchParams.get("locationId") === item.id
            )[0]?.location || "Location"
          }
        />
        {searchParams.has("locationId") && (
          <ButtonResetFilter
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            property="locationId"
          />
        )}
        {active && (
          <FilterForm
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            data={locationData.data}
            setActive={setActive}
            property="location"
            searchProperty="locationId"
          />
        )}
      </div>
    </div>
  );
};

export default FilterLocation;
