import ArrowBackLight from "@assets/img/light/arrowBack.svg";
import ArrowBackNotActiveLight from "@assets/img/light/ArrowBackNotActive.svg";
import ArrowStartLight from "@assets/img/light/arrowStart.svg";
import ArrowStartNotActiveLight from "@assets/img/light/ArrowStartNotActive.svg";
import ArrowNextLight from "@assets/img/light/arrowNext.svg";
import ArrowNextNotActiveLight from "@assets/img/light/ArrowNextNotActive.svg";
import ArrowEndLight from "@assets/img/light/arrowEnd.svg";
import ArrowEndNotActiveLight from "@assets/img/light/ArrowEndNotActive.svg";

import ArrowBackDark from "@assets/img/dark/arrowBack.svg";
import ArrowBackNotActiveDark from "@assets/img/dark/ArrowBackNotActive.svg";
import ArrowStartDark from "@assets/img/dark/arrowStart.svg";
import ArrowStartNotActiveDark from "@assets/img/dark/ArrowStartNotActive.svg";
import ArrowNextDark from "@assets/img/dark/arrowNext.svg";
import ArrowNextNotActiveDark from "@assets/img/dark/ArrowNextNotActive.svg";
import ArrowEndDark from "@assets/img/dark/arrowEnd.svg";
import ArrowEndNotActiveDark from "@assets/img/dark/ArrowEndNotActive.svg";

const getDataImg = (themeState) => {
  return {
    ArrowBack: themeState === "dark" ? ArrowBackDark : ArrowBackLight,
    ArrowBackNotActive:
      themeState === "dark" ? ArrowBackNotActiveDark : ArrowBackNotActiveLight,
    ArrowStart: themeState === "dark" ? ArrowStartDark : ArrowStartLight,
    ArrowStartNotActive:
      themeState === "dark"
        ? ArrowStartNotActiveDark
        : ArrowStartNotActiveLight,
    ArrowNext: themeState === "dark" ? ArrowNextDark : ArrowNextLight,
    ArrowNextNotActive:
      themeState === "dark" ? ArrowNextNotActiveDark : ArrowNextNotActiveLight,
    ArrowEnd: themeState === "dark" ? ArrowEndDark : ArrowEndLight,
    ArrowEndNotActive:
      themeState === "dark" ? ArrowEndNotActiveDark : ArrowEndNotActiveLight,
  };
};

export default getDataImg;
