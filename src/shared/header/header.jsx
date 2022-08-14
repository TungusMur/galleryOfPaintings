import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "@assets/img/logo.svg";
import ThemeLight from "@assets/img/light/theme.svg";
import ThemeDark from "@assets/img/dark/theme.svg";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "@store/redux/reducers/themeReducer";
import "./styles.scss";

const Header = () => {
  const themeState = useSelector((state) => state.themeReducer.theme);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="header-logo">
        <NavLink className="header-logo__link" to="/">
          <img className="header-logo__img" alt="logo" src={Logo} />
        </NavLink>
      </div>
      <div className="header-action">
        <button
          className="header-action__button"
          onClick={() => {
            if (themeState === "dark") {
              localStorage["data-theme"] = "light";
              document.documentElement.setAttribute("data-theme", "light");
              dispatch(setTheme("light"));
            } else {
              localStorage["data-theme"] = "dark";
              document.documentElement.setAttribute("data-theme", "dark");
              dispatch(setTheme("dark"));
            }
          }}
        >
          <img
            className="header-action__img"
            alt="action"
            src={themeState === "dark" ? ThemeDark : ThemeLight}
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
