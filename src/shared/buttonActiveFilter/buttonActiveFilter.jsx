import React from "react";

const ButtonActiveFilter = ({ setActive, content }) => {
  return (
    <div className="buttonActiveFilter">
      <button
        className="buttonActiveFilter__button"
        onClick={() => {
          setActive((state) => !state);
        }}
      >
        {content}
      </button>
    </div>
  );
};

export default ButtonActiveFilter;
