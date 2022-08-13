import React, { useState } from "react";
import { useDebounce } from "@helpers";
import { useCallback } from "react";
import ButtonResetFilter from "@shared/buttonResetFilter";
import "./styles.scss";

const FilterName = ({ searchParams, setSearchParams }) => {
  const [valueInput, setValueInput] = useState(searchParams.get("name") || "");
  const setNameSearchParams = useCallback(
    (e) => {
      if (e) {
        searchParams.set("name", e);
      } else {
        searchParams.delete("name");
      }
      searchParams.delete("page");
      setSearchParams(searchParams);
    },
    [searchParams]
  );

  useDebounce(valueInput, setNameSearchParams, 500);

  return (
    <div className="filtertName filterItem">
      <input
        className="filtertName__input"
        placeholder="Name"
        value={valueInput}
        onChange={(e) => {
          setValueInput(e.target.value);
        }}
      />
      {searchParams.has("name") && (
        <ButtonResetFilter
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          property="name"
          additionOnClick={() => {
            setValueInput("");
          }}
        />
      )}
    </div>
  );
};

export default FilterName;
