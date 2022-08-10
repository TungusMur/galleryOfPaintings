import React, { useMemo } from "react";
import { getDataItems } from "./functions";

const Elevator = ({
  totalCount,
  limitCount = 12,
  searchParams,
  setSearchParams,
}) => {
  const dataElevator = useMemo(
    () =>
      getDataItems(
        Math.ceil(totalCount / limitCount),
        searchParams,
        setSearchParams
      ),
    [searchParams]
  );

  return (
    <div className="elevator">
      <div className="elevator-form">
        {dataElevator.map((item, index) => (
          <button
            key={index}
            className={`elevator-item__button elevator-item__button_${item.className}`}
            onClick={item.onClick}
          >
            {item.content}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Elevator;
