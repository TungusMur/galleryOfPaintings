import React, { useState, useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import ButtonActiveFilter from "@shared/buttonActiveFilter";
import ButtonResetFilter from "@shared/buttonResetFilter";
import FilterForm from "@shared/filterForm";
import { useOutsideClick } from "@helpers";
import "./styles.scss";

const FilterAuthor = ({ searchParams, setSearchParams }) => {
  const [active, setActive] = useState(false);
  const authorData = useSelector((state) => state.authorReducer);
  const filterRef = useRef(null);
  const handlerClick = useCallback(() => {
    if (active) {
      setActive(false);
    }
  }, [active]);

  useOutsideClick(filterRef, handlerClick);

  return (
    <div
      className={`filterAuthor filterItem ${active ? "active" : ""}`}
      ref={filterRef}
    >
      <div
        className={`filterAuthor-action filterItem-action ${
          active ? "active" : ""
        }`}
      >
        <ButtonActiveFilter
          setActive={setActive}
          content={
            authorData.data.filter(
              (item) => +searchParams.get("authorId") === item.id
            )[0]?.name || "Author"
          }
        />
        {searchParams.has("authorId") && (
          <ButtonResetFilter
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            property="authorId"
          />
        )}
        {active && (
          <FilterForm
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            data={authorData.data}
            setActive={setActive}
            property="name"
            searchProperty="authorId"
          />
        )}
      </div>
    </div>
  );
};

export default FilterAuthor;
