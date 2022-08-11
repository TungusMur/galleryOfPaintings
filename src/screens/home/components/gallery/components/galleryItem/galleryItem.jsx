import React from "react";

const GalleryItem = ({ img, name, author, created, location }) => {
  return (
    <div className="galleryItem">
      <img
        className="galleryItem__img"
        alt={name}
        src={process.env.BASE_URL + img}
      />
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
