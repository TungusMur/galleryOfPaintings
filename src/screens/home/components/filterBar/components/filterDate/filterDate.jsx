import React, { useState, useRef, useCallback } from "react";
import ButtonActiveFilter from "@shared/buttonActiveFilter";
import ButtonResetFilter from "@shared/buttonResetFilter";
import { useOutsideClick } from "@helpers";

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
          />
        )}
      </div>
      {active && (
        <div className="filterDate-form">
          <div className="filterDate-from filterDate-item">
            <input
              className="filterDate-item__input"
              type="number"
              id="from"
              value={created.gte}
              placeholder={"from"}
              onChange={(e) => {
                setCreated((state) => ({ ...state, gte: e.target.value }));
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
                  } else if (!created.lte) {
                    document.getElementById("before").focus();
                  }
                }
              }}
            ></input>
          </div>
          <div className="filterDate-line">-</div>
          <div className="filterDate-before filterDate-item">
            <input
              className="filterDate-item__input"
              id="before"
              type="number"
              value={created.lte}
              placeholder={"before"}
              onChange={(e) => {
                setCreated((state) => ({ ...state, lte: e.target.value }));
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
                  } else if (!created.gte) {
                    document.getElementById("from").focus();
                  }
                }
              }}
            ></input>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDate;
