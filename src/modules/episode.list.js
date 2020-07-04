import React from "react";
import EpisodeCard from "./episode.card";

const EpisodesList = ({ episodes }) => {
  return (
    <div className="wrapper">
      {episodes.map((episode, i) => {
        return (
          <EpisodeCard
            key={episodes[i].id}
            id={episodes[i].id}
            name={episodes[i].name}
          />
        );
      })}
    </div>
  );
};

export default EpisodesList;
