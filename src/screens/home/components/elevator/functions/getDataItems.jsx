import React from "react";
import ArrowBack from "../../../../../assets/img/light/arrowBack.svg";
import ArrowBackNotActive from "../../../../../assets/img/light/ArrowBackNotActive.svg";
import ArrowStart from "../../../../../assets/img/light/arrowStart.svg";
import ArrowStartNotActive from "../../../../../assets/img/light/ArrowStartNotActive.svg";
import ArrowNext from "../../../../../assets/img/light/arrowNext.svg";
import ArrowNextNotActive from "../../../../../assets/img/light/ArrowNextNotActive.svg";
import ArrowEnd from "../../../../../assets/img/light/arrowEnd.svg";
import ArrowEndNotActive from "../../../../../assets/img/light/ArrowEndNotActive.svg";

const getDataItems = (countPage, searchParams, setSearchParams) => {
  const data = [];
  const pageActive = searchParams.get("page");

  if (countPage === 0) {
    return [];
  }

  for (let i = 1; i <= countPage; i++) {
    data.push({
      className: `number${
        +pageActive === i || (!pageActive && i === 1) ? "_active" : ""
      }`,
      content: () => <p>{i}</p>,
      onClick:
        i === 1
          ? () => {
              searchParams.delete("page");
              setSearchParams(searchParams);
            }
          : () => {
              searchParams.set("page", i);
              setSearchParams(searchParams);
            },
    });
  }
  if (countPage > 1) {
    data.unshift({
      className: `back${!pageActive ? "_notActive" : "_active"}`,
      content: () => (
        <img
          className="elevator-item__img"
          src={!pageActive ? ArrowBackNotActive : ArrowBack}
          alt="arrowBack"
        />
      ),
      onClick: () => {
        if (pageActive - 1 === 1) {
          searchParams.delete("page");
          setSearchParams(searchParams);
        } else if (searchParams.has("page")) {
          searchParams.set("page", pageActive - 1);
          setSearchParams(searchParams);
        }
      },
    });

    data.push({
      className: `next${+pageActive === countPage ? "_notActive" : "_active"}`,
      content: () => (
        <img
          className="elevator-item__img"
          src={+pageActive === countPage ? ArrowNextNotActive : ArrowNext}
          alt="arrowNext"
        />
      ),
      onClick: () => {
        if (pageActive < countPage) {
          searchParams.set("page", pageActive ? +pageActive + 1 : 2);
          setSearchParams(searchParams);
        }
      },
    });
  }

  if (countPage > 2) {
    data.unshift({
      className: `start${!pageActive ? "_notActive" : "_active"}`,
      content: () => (
        <img
          className="elevator-item__img"
          src={!pageActive ? ArrowStartNotActive : ArrowStart}
          alt="arrowStart"
        />
      ),
      onClick: () => {
        searchParams.delete("page");
        setSearchParams(searchParams);
      },
    });

    data.push({
      className: `end${+pageActive === countPage ? "_notActive" : "_active"}`,
      content: () => (
        <img
          className="elevator-item__img"
          src={+pageActive === countPage ? ArrowEndNotActive : ArrowEnd}
          alt="arrowEnd"
        />
      ),
      onClick: () => {
        searchParams.set("page", countPage);
        setSearchParams(searchParams);
      },
    });
  }
  return data;
};

export default getDataItems;
