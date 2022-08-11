import React from "react";

const ButtonActiveFilter = ({ setActive, content }) => (
  <div className="buttonActiveFilter">
    <button
      className="buttonActiveFilter__button"
      onClick={() => {
        setActive((state) => !state);
      }}
    >
      <div className="buttonActiveFilter-content">{content}</div>
      <div className="buttonActiveFilter__img">\/</div>
    </button>
  </div>
);

export default ButtonActiveFilter;
