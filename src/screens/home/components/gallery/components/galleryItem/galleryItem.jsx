import React from "react";
import "./styles.scss";

const GalleryItem = ({ img, name, author, created, location }) => {
  return (
    <div className="galleryItem">
      <div
        className="galleryItem__img"
        style={{ backgroundImage: `url(${process.env.BASE_URL + img})` }}
      ></div>
      <div className="galleryItem-stopper"></div>
      <div className="galleryItem-content">
        <div className="galleryItem-name">
          <p>{name}</p>
        </div>
        <div className="galleryItem-author">
          <p>Author:</p> <p>{author}</p>
        </div>
        <div className="galleryItem-created">
          <p>Created:</p> <p>{created}</p>
        </div>
        <div className="galleryItem-location">
          <p>Location:</p> <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
