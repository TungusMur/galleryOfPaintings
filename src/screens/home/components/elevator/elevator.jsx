import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { getDataItems } from "./functions";
import "./styles.scss";

const Elevator = ({ limitCount = 12, searchParams, setSearchParams }) => {
  const galleryData = useSelector((state) => state.galleryReducer);
  const themeState = useSelector((state) => state.themeReducer.theme);
  const dataElevator = useMemo(
    () =>
      getDataItems(
        Math.ceil(galleryData.totalCount / limitCount),
        searchParams,
        setSearchParams,
        themeState
      ),
    [galleryData, themeState]
  );

  return (
    !galleryData.loading &&
    galleryData.status === 200 &&
    galleryData.totalCount > 12 && (
      <div className="elevator">
        <div className="elevator-form">
          {dataElevator.map((item, index) => (
            <button
              key={index}
              className={`elevator-item__button elevator-item__button_${item.className}`}
              onClick={item.onClick}
            >
              {item.content()}
            </button>
          ))}
        </div>
      </div>
    )
  );
};

export default Elevator;
