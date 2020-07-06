import React from "react";
import "./episode.card.scss";
import { Link } from "react-router-dom";

const EpisodeCard = ({ name, id }) => {
  return (
    <Link to={`${id}`}>
      <div key={id} className="episode_card">
        <div className="">
          <h4>{name} </h4>
        </div>
      </div>
    </Link>
  );
};

export default EpisodeCard;
