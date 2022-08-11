const getDataItems = (countPage, searchParams, setSearchParams) => {
  const data = [];

  if (countPage === 0) {
    return [];
  }

  for (let i = 1; i <= countPage; i++) {
    data.push({
      className: "number",
      content: i,
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
      className: "back",
      content: "<",
      onClick: () => {
        if (searchParams.get("page") - 1 === 1) {
          searchParams.delete("page");
          setSearchParams(searchParams);
        } else if (searchParams.get("page")) {
          searchParams.set("page", searchParams.get("page") - 1);
          setSearchParams(searchParams);
        }
      },
    });

    data.push({
      className: "next",
      content: ">",
      onClick: () => {
        if (searchParams.get("page") < countPage) {
          searchParams.set(
            "page",
            searchParams.get("page") ? +searchParams.get("page") + 1 : 2
          );
          setSearchParams(searchParams);
        }
      },
    });
  }

  if (countPage > 2) {
    data.unshift({
      className: "start",
      content: "<<",
      onClick: () => {
        searchParams.delete("page");
        setSearchParams(searchParams);
      },
    });

    data.push({
      className: "end",
      content: ">>",
      onClick: () => {
        searchParams.set("page", countPage);
        setSearchParams(searchParams);
      },
    });
  }
  return data;
};

export default getDataItems;
