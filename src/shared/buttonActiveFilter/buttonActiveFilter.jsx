import React from "react";
import ArrowDownLight from "@assets/img/light/arrowDown.svg";
import ArrowDownDark from "@assets/img/dark/arrowDown.svg";
import { useSelector } from "react-redux";
import "./styles.scss";

const ButtonActiveFilter = ({ setActive, content }) => {
  const themeState = useSelector((state) => state.themeReducer.theme);
  return (
    <div className="buttonActiveFilter">
      <button
        className="buttonActiveFilter__button"
        onClick={() => {
          setActive((state) => !state);
        }}
      >
        <div className="buttonActiveFilter-content">
          <p>{content}</p>
        </div>
        <img
          className="buttonActiveFilter__img"
          src={themeState === "dark" ? ArrowDownDark : ArrowDownLight}
          alt="arrowDown"
        />
      </button>
    </div>
  );
};

export default ButtonActiveFilter;
