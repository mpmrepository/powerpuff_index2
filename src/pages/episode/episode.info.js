import React from "react";
import { useParams } from "react-router-dom";

const EpisodeInfo = ({ episodes }) => {
  let { epId } = useParams();
  let episode = episodes.find((x) => x.id === Number(epId));

  return (
    <div className="pb16">
      {episode.image ? (
        <div className="show_description show_section pb8">
          <img alt="epiosde thumb" src={episode.image.original} />
        </div>
      ) : null}

      <div className="show_subtitle pb2">
        <h4>Episode details</h4>
      </div>

      <div className="show_title pb6 ">
        <h1>{episode.name}</h1>
      </div>
      <div class="pb6">
        {episode.season ? <p>Season: {episode.season}</p> : null}
        {episode.number ? <p>Episode: {episode.number}</p> : null}
        {episode.airdate ? <p>Originally aired: {episode.airdate}</p> : null}
      </div>

      {episode.summary ? (
        <div className="show_description  ">
          <p>{episode.summary.replace(/(<([^>]+)>)/gi, "")}</p>
        </div>
      ) : null}
    </div>
  );
};

export default EpisodeInfo;
