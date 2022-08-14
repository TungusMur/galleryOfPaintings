import React, { useCallback } from "react";
import "./styles.scss";

const FilterForm = ({
  searchParams,
  setSearchParams,
  data,
  setActive,
  property,
  searchProperty,
}) => {
  const handlerChange = useCallback(
    (id) => {
      searchParams.set(searchProperty, id);
      searchParams.delete("page");
      setSearchParams(searchParams);
      setActive(false);
    },
    [setActive]
  );

  return (
    <div className="filterForm">
      {data.map((item) => (
        <div key={item.id} className="filterForm-item">
          <label key={item.id} className="filterForm-item__label">
            <input
              className="filterForm-item__input"
              type="radio"
              checked={+searchParams.get(searchProperty) === item.id}
              onChange={() => handlerChange(item.id)}
            />
            <h2>{item[property]}</h2>
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterForm;
