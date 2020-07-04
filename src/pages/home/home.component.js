import React, { useEffect } from "react";
import "./home.style.scss";

const HomeComponent = ({ name, id, summary, episodeList, showsPending }) => {
  return showsPending ? (
    <h1>loading</h1>
  ) : (
    <div className="pb16">
      <div className="show_title pb8">
        <h2>{name}</h2>
      </div>
      <div className="show_description show_section ">
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default HomeComponent;
