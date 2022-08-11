import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";

const Gallery = () => {
  const galleryData = useSelector((state) => state.galleryReducer);

  return (
    <div className="gallery">
      {galleryData.loading ? (
        "loading"
      ) : galleryData.status !== 200 ? (
        "error"
      ) : (
        <div className="gallery-content">
          {galleryData.data.map((item) => (
            <div key={item.id} className="galleryItem">
              <img alt={item.name} src={process.env.BASE_URL + item.imageUrl} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
