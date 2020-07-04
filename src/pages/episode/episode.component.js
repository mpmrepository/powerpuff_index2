import React, { useEffect } from "react";
import EpisodeInfo from "./episode.info";
import { useParams, Route, Link } from "react-router-dom";

const EpisodeComponent = ({ episodes, episodesPending }) => {
  console.log(episodes, episodes.length);
  return episodesPending ? (
    <h1>loading ep component</h1>
  ) : (
    <div className="home_section">
      <EpisodeInfo episodes={episodes} />
    </div>
  );
};

export default EpisodeComponent;
