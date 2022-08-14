import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import GalleryItem from "./components/galleryItem";
import LoadingDark from "@assets/img/dark/loading.gif";
import LoadingLight from "@assets/img/light/loading.gif";
import "./styles.scss";

const Gallery = () => {
  const themeState = useSelector((state) => state.themeReducer.theme);
  const data = useSelector((state) => ({
    galleryData: state.galleryReducer,
    authorData: state.authorReducer,
    locationData: state.locationReducer,
  }));
  useEffect(() => {
    console.log(data);
  });
  const loadingData = [
    data.galleryData.loading,
    data.authorData.loading,
    data.locationData.loading,
  ];
  const statusData = [
    data.galleryData.status,
    data.authorData.status,
    data.locationData.status,
  ];

  return (
    <div className="gallery">
      {loadingData.includes(true) ? (
        <div className="gallery-loading">
          <img
            className="gallery-loading__img"
            src={themeState === "dark" ? LoadingDark : LoadingLight}
            alt="loading"
          />
        </div>
      ) : statusData.reduce(
          (sum, item) => (item === 200 ? sum + 1 : sum),
          0
        ) === 3 ? (
        <div className="gallery-content">
          {data.galleryData.data.map((item) => (
            <GalleryItem
              key={item.id}
              img={item.imageUrl}
              name={item.name}
              author={data.authorData.data[item.authorId - 1].name}
              created={item.created}
              location={data.locationData.data[item.locationId - 1].location}
              themeState={themeState}
            />
          ))}
        </div>
      ) : (
        "error"
      )}
    </div>
  );
};

export default Gallery;
