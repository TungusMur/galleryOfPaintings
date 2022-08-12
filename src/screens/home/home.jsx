import React from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuthorData, getGalleryData, getLocationData } from "@store/api";
import { getGallery, loading } from "@store/redux/reducers/galleryReducer";
import { getAuthor } from "@store/redux/reducers/authorReducer";
import { getLocation } from "@store/redux/reducers/locationReducer";
import Gallery from "./components/gallery";
import Elevator from "./components/elevator";
import FilterBar from "./components/filterBar/filterBar";

const Home = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getAuthorData().then((data) => dispatch(getAuthor(data)));
    getLocationData().then((data) => dispatch(getLocation(data)));
  }, []);

  useEffect(() => {
    dispatch(loading());
    getGalleryData(
      searchParams.get("page") || 1,
      searchParams.get("authorId"),
      searchParams.get("locationId"),
      searchParams.get("name"),
      searchParams.getAll("created")[0],
      searchParams.getAll("created")[1]
    ).then((data) => dispatch(getGallery(data)));
  }, [searchParams]);

  return (
    <div className="home">
      <FilterBar
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <Gallery />
      <Elevator searchParams={searchParams} setSearchParams={setSearchParams} />
    </div>
  );
};

export default Home;
