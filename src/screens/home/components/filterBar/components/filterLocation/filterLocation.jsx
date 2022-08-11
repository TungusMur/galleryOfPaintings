import React, { useState } from "react";
import { useSelector } from "react-redux";
import ButtonActiveFilter from "@shared/buttonActiveFilter";
import ButtonResetFilter from "@shared/buttonResetFilter";

const FilterLocation = ({ searchParams, setSearchParams }) => {
  const [active, setActive] = useState(false);
  const locationData = useSelector((state) => state.locationReducer);

  return (
    <div className="filterLocation">
      <div className="filterLocation-action">
        <ButtonActiveFilter
          setActive={setActive}
          content={
            locationData.data.filter(
              (item) => +searchParams.get("locationId") === item.id
            )[0]?.location || "Location"
          }
        />
        {searchParams.get("locationId") && (
          <ButtonResetFilter
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            property="locationId"
          />
        )}
      </div>
      {active && (
        <div className="filterLocation-form">
          {locationData.data.map((item) => (
            <div key={item.id} className="filterLocation-item">
              <label key={item.id} className="filterLocation-item__label">
                <input
                  className="filterLocation-item__input"
                  type="radio"
                  checked={+searchParams.get("locationId") === item.id}
                  onChange={() => {
                    searchParams.set("locationId", item.id);
                    searchParams.delete("page");
                    setSearchParams(searchParams);
                    setActive(false);
                  }}
                />
                {item.location}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterLocation;
