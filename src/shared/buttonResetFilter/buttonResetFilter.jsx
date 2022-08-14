import React, { useCallback } from "react";
import CrossLight from "@assets/img/light/cross.svg";
import CrossDark from "@assets/img/dark/cross.svg";
import { useSelector } from "react-redux";
import "./styles.scss";

const ButtonResetFilter = ({
  searchParams,
  setSearchParams,
  property,
  additionOnClick = null,
}) => {
  const themeState = useSelector((state) => state.themeReducer.theme);
  const handlerOnClick = useCallback(() => {
    if (additionOnClick) {
      additionOnClick();
    }

    searchParams.delete(property);
    setSearchParams(searchParams);
    if (additionOnClick) {
      additionOnClick();
    }
  }, [searchParams]);

  return (
    <div className="buttonResetFilter">
      <button className="buttonResetFilter__button" onClick={handlerOnClick}>
        <img
          className="buttonResetFilter__img"
          src={themeState === "dark" ? CrossDark : CrossLight}
          alt="cross"
        />
      </button>
    </div>
  );
};

export default ButtonResetFilter;
