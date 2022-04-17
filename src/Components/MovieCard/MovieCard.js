import React from "react";
import "./MovieCard.scss";

const MovieCard = ({ data }) => {
  return (
    <div className="card-item">
      <div className="card-inncer">
        <div className="card-top">
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
