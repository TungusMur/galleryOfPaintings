import React, { useCallback } from "react";
import Cross from "../../assets/img/light/cross.svg";
import "./styles.scss";

const ButtonResetFilter = ({
  searchParams,
  setSearchParams,
  property,
  additionOnClick = null,
}) => {
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
        <img className="buttonResetFilter__img" src={Cross} alt="cross" />
      </button>
    </div>
  );
};

export default ButtonResetFilter;
