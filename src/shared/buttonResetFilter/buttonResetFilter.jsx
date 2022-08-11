import React, { useCallback } from "react";

const ButtonResetFilter = ({
  searchParams,
  setSearchParams,
  property,
  additionOnClick = null,
}) => {
  const handlerOnClick = useCallback(() => {
    searchParams.delete(property);
    setSearchParams(searchParams);
    if (additionOnClick) {
      additionOnClick();
    }
  }, [searchParams]);

  return (
    <div className="buttonResetFilter">
      <button className="buttonResetFilter__button" onClick={handlerOnClick}>
        Крестик
      </button>
    </div>
  );
};

export default ButtonResetFilter;
