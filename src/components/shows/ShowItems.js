import React, { useContext } from "react";

import { Link } from "react-router-dom";
import noImg from "../../assets/images/no-img.png";
import { ShowsContext } from "../../context/ShowContext";
const ShowItems = ({ show }) => {
  const { getActiveShow } = useContext(ShowsContext);
  return (
    <Link
      to={`/shows/${show.id}`}
      className="show-item"
      onClick={() => getActiveShow(show.id)}
    >
      
      <div className="show-item_img">
        <img
          src={show.image && show.image.medium ? show.image.medium : noImg}
          alt={show.name ? show.name : "show image"}
        />
        <div className="show-item_img-hover">
          {show.rating && show.rating.average && (
            <div className="rating">
              <span>star</span>{" "}
              {show.rating.average ? show.rating.average : "No average"}
            </div>
          )}
        </div>
        <h3 className="title">{show.name ? show.name : "noName"}</h3>
      </div>
      
    </Link>
  );
};

export default ShowItems;
