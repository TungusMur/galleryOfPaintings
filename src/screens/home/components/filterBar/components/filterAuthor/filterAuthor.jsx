import React, { useState, useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import ButtonActiveFilter from "@shared/buttonActiveFilter";
import ButtonResetFilter from "@shared/buttonResetFilter";
import { useOutsideClick } from "@helpers";

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
    <div className="filterAuthor" ref={filterRef}>
      <div className="filterAuthor-action">
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
      </div>
      {active && (
        <div className="filterAuthor-form">
          {authorData.data.map((item) => (
            <div key={item.id} className="filterAuthor-item">
              <label className="filterAuthor-item__label">
                <input
                  className="filterAuthor-item__input"
                  type="radio"
                  checked={+searchParams.get("authorId") === item.id}
                  onChange={() => {
                    searchParams.set("authorId", item.id);
                    searchParams.delete("page");
                    setSearchParams(searchParams);
                    setActive(false);
                  }}
                />
                {item.name}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterAuthor;
