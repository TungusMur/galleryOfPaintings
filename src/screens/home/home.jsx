import React from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import getGalleryData from "@store/api/getGalleryData";
import { getData } from "@store/redux/reducers/galleryReducer";
import Gallery from "./components/gallery";
import Elevator from "./components/elevator";

const Home = () => {
  const dispatch = useDispatch();
  const galleryData = useSelector((state) => state.galleryReducer);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getGalleryData(searchParams.get("page") || 1).then((data) =>
      dispatch(getData(data))
    );
  }, [searchParams]);

  return (
    <div className="home">
      <Gallery data={galleryData} />
      {galleryData.totalCount > 12 && (
        <Elevator
          totalCount={galleryData.totalCount}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      )}
    </div>
  );
};

export default Home;
