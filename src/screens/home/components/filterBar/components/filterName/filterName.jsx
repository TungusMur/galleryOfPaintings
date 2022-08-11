import React, { useState } from "react";
import useDebounce from "@helpers/useDebounce";
import { useCallback } from "react";

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

  useDebounce(valueInput, setNameSearchParams, 1000);

  return (
    <div className="filtertName">
      <input
        className="filtertName__input"
        placeholder="Name"
        value={valueInput}
        onChange={(e) => {
          setValueInput(e.target.value);
        }}
      />
    </div>
  );
};

export default FilterName;
