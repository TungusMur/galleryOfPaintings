import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const FilterAuthor = ({ searchParams, setSearchParams }) => {
  const [active, setActive] = useState(false);
  const authorData = useSelector((state) => state.authorReducer);

  return (
    <div className="filterAuthor">
      <div className="filterAuthor-action">
        <button
          onClick={() => {
            setActive((state) => !state);
          }}
        >
          {authorData.data.filter(
            (item) => +searchParams.get("authorId") === item.id
          )[0]?.name || "Author"}
        </button>
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
