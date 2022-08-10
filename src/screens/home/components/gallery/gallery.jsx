import React from "react";
import "./styles.scss";

const Gallery = ({ data }) => (
  <div className="gallery">
    {data.loading ? (
      "loading"
    ) : data.status !== 200 ? (
      "error"
    ) : (
      <div className="gallery-content">
        {data.data.map((item) => (
          <div key={item.id} className="galleryItem">
            <img alt={item.name} src={process.env.BASE_URL + item.imageUrl} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default Gallery;
