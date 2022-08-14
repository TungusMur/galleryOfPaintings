import React from "react";
import getDataImg from "./getDataImg";

const getDataItems = (countPage, searchParams, setSearchParams, themeState) => {
  const data = [];
  const pageActive = searchParams.get("page");
  const dataimg = getDataImg(themeState);

  if (countPage === 0) {
    return [];
  }

  for (let i = 1; i <= countPage; i++) {
    data.push({
      className: `number ${
        +pageActive === i || (!pageActive && i === 1) ? "active" : ""
      }`,
      content: () => <h1>{i}</h1>,
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
      className: `back ${!pageActive ? "notActive" : "active"}`,
      content: () => (
        <img
          className="elevator-item__img"
          src={!pageActive ? dataimg.ArrowBackNotActive : dataimg.ArrowBack}
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
      className: `next ${+pageActive === countPage ? "notActive" : "active"}`,
      content: () => (
        <img
          className="elevator-item__img"
          src={
            +pageActive === countPage
              ? dataimg.ArrowNextNotActive
              : dataimg.ArrowNext
          }
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
      className: `start ${!pageActive ? "notActive" : "active"}`,
      content: () => (
        <img
          className="elevator-item__img"
          src={!pageActive ? dataimg.ArrowStartNotActive : dataimg.ArrowStart}
          alt="arrowStart"
        />
      ),
      onClick: () => {
        searchParams.delete("page");
        setSearchParams(searchParams);
      },
    });

    data.push({
      className: `end ${+pageActive === countPage ? "notActive" : "active"}`,
      content: () => (
        <img
          className="elevator-item__img"
          src={
            +pageActive === countPage
              ? dataimg.ArrowEndNotActive
              : dataimg.ArrowEnd
          }
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
