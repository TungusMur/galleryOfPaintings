import React, { useState, useRef, useCallback } from "react";
import ButtonActiveFilter from "@shared/buttonActiveFilter";
import ButtonResetFilter from "@shared/buttonResetFilter";
import { useOutsideClick } from "@helpers";
import FilterDateItem from "./components/filterDateItem";

const FilterDate = ({ searchParams, setSearchParams }) => {
  const [active, setActive] = useState(false);

  const [created, setCreated] = useState(() => {
    if (searchParams.getAll("created").length > 1) {
      return {
        gte: searchParams.getAll("created")[0],
        lte: searchParams.getAll("created")[1],
      };
    } else if (searchParams.getAll("created").length === 1) {
      return {
        gte: searchParams.getAll("created")[0],
        lte: 2000,
      };
    } else {
      return {
        gte: "",
        lte: "",
      };
    }
  });

  const filterRef = useRef(null);
  const handlerClick = useCallback(() => {
    if (active) {
      if (created.gte && created.lte) {
        searchParams.delete("created");
        searchParams.append("created", created.gte);
        searchParams.append("created", created.lte);
        setSearchParams(searchParams);
      } else if (created.gte) {
        searchParams.delete("created");
        searchParams.append("created", created.gte);
        searchParams.append("created", 2000);
        setSearchParams(searchParams);
      }
      setActive(false);
    }
  }, [active, created]);

  useOutsideClick(filterRef, handlerClick);

  return (
    <div className="filterDate" ref={filterRef}>
      <div className="filterDate-action">
        <ButtonActiveFilter
          setActive={setActive}
          content={
            +searchParams.getAll("created")[0] &&
            +searchParams.getAll("created")[1]
              ? `${searchParams.getAll("created")[0]} - ${
                  searchParams.getAll("created")[1]
                }`
              : "Сreated"
          }
        />
        {searchParams.has("created") && (
          <ButtonResetFilter
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            property="created"
            additionOnClick={() => {
              setCreated({ gte: "", lte: "" });
            }}
          />
        )}
      </div>
      {active && (
        <div className="filterDate-form">
          <FilterDateItem
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            created={created}
            setCreated={setCreated}
            setActive={setActive}
            property="lte"
            propertyOther="gte"
            id="from"
            searchId="before"
          />
          <div className="filterDate-line">-</div>
          <FilterDateItem
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            created={created}
            setCreated={setCreated}
            setActive={setActive}
            property="gte"
            propertyOther="lte"
            id="before"
            searchId="from"
          />
        </div>
      )}
    </div>
  );
};

export default FilterDate;
