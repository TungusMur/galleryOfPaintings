import React from "react";
import "./styles.scss";

const FilterDateItem = ({
  searchParams,
  setSearchParams,
  created,
  setCreated,
  setActive,
  property,
  propertyOther,
  id,
  searchId,
}) => {
  return (
    <div className="filterDateItem">
      <input
        className="filterDateItem__input"
        id={id}
        type="number"
        value={created[property]}
        placeholder={id}
        onChange={(e) => {
          setCreated((state) => ({ ...state, [property]: e.target.value }));
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (created.gte && created.lte) {
              searchParams.delete("created");
              searchParams.append("created", created.gte);
              searchParams.append("created", created.lte);
              searchParams.delete("page");
              setSearchParams(searchParams);
              setActive(false);
            } else if (!created[propertyOther]) {
              document.getElementById(searchId).focus();
            }
          }
        }}
      ></input>
    </div>
  );
};

export default FilterDateItem;
