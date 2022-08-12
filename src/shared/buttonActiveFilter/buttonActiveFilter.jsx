import React from "react";
import ArrowDown from "../../assets/img/light/arrowDown.svg";

const ButtonActiveFilter = ({ setActive, content }) => (
  <div className="buttonActiveFilter">
    <button
      className="buttonActiveFilter__button"
      onClick={() => {
        setActive((state) => !state);
      }}
    >
      <div className="buttonActiveFilter-content">{content}</div>
      <img className="buttonActiveFilter__img" src={ArrowDown} alt="arrowDown" />
    </button>
  </div>
);

export default ButtonActiveFilter;
