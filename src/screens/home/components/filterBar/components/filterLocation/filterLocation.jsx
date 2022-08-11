import React, { useState } from "react";
import { useSelector } from "react-redux";

const FilterLocation = ({ searchParams, setSearchParams }) => {
  const [active, setActive] = useState(false);
  const locationData = useSelector((state) => state.locationReducer);

  return (
    <div className="filterLocation">
      <div className="filterLocation-action">
        <button
          onClick={() => {
            setActive((state) => !state);
          }}
        >
          {locationData.data.filter(
            (item) => +searchParams.get("locationId") === item.id
          )[0]?.location || "Location"}
        </button>
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
