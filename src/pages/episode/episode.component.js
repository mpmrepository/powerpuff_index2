import React from "react";
import EpisodeInfo from "./episode.info";

const EpisodeComponent = ({ episodes, episodesPending }) => {
  return episodesPending ? (
    <h1>loading ep component</h1>
  ) : (
    <div className="home_section">
      <EpisodeInfo episodes={episodes} />
    </div>
  );
};

export default EpisodeComponent;
