import React from "react";
import LoadingLight from "@assets/img/light/loading.gif";
import LoadingDark from "@assets/img/dark/loading.gif";
import "./styles.scss";

const GalleryItem = ({ img, name, author, created, location, themeState }) => {
  return (
    <div className="galleryItem">
      <div
        className="galleryItem__img"
        style={{ backgroundImage: `url(${process.env.BASE_URL + img})` }}
      ></div>
      <div className="galleryItem-stopper">
        {/* <img
          className="galleryItem-stopper__img"
          src={themeState === "dark" ? LoadingDark : LoadingLight}
        /> */}
      </div>
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
