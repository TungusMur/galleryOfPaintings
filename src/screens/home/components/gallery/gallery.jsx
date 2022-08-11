import React from "react";
import { useSelector } from "react-redux";
import GalleryItem from "./components/galleryItem";
import "./styles.scss";

const Gallery = () => {
  const data = useSelector((state) => ({
    galleryData: state.galleryReducer,
    authorData: state.authorReducer,
    locationData: state.locationReducer,
  }));

  return (
    <div className="gallery">
      {[
        data.galleryData.loading,
        data.authorData.loading,
        data.locationData.loading,
      ].includes(true) ? (
        "loading"
      ) : [
          data.galleryData.status,
          data.authorData.status,
          data.locationData.status,
        ].reduce((sum, item) => (item === 200 ? sum + 1 : sum), 0) === 3 ? (
        <div className="gallery-content">
          {data.galleryData.data.map((item) => (
            <GalleryItem
              key={item.id}
              img={item.imageUrl}
              name={item.name}
              author={data.authorData.data[item.authorId].author}
              created={item.created}
              location={data.locationData.data[item.locationId].location}
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
