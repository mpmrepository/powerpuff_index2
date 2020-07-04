import React, { useEffect } from "react";
import "./App.scss";
import HomeComponent from "./pages/home/home.container";
import { Switch, Route, Link, useRouteMatch, NavLink } from "react-router-dom";
import EpisodeComponent from "./pages/episode/episode.component";
import ErrorBoundary from "./ErrorBoundary";
import EpisodesList from "./modules/episode.list";

const App = (props) => {
  const { onFetchShow, onFetchEpisodes } = props;
  useEffect(() => {
    onFetchShow();
  }, [onFetchShow]);

  useEffect(() => {
    onFetchEpisodes();
  }, [onFetchEpisodes]);

  const { id, image, name } = props.showInfo;

  const summary = props.showInfo.summary
    ? props.showInfo.summary.replace(/(<([^>]+)>)/gi, "")
    : "content loading";

  const pageImage = image
    ? image.original
    : "https://via.placeholder.com/800x1000/ddd/000.png/?text=Image+unavailable!";

  const { episodesPending, episodeList } = props;

  return props.showsPending ? (
    <div className="App">
      <p>loading</p>
    </div>
  ) : (
    <div className="App">
      <div
        className="cover_image"
        style={{ backgroundImage: `url(${pageImage})` }}
      ></div>
      <div className="app_wrapper">
        <div className="app_content">
          <nav className="pb16">
            <NavLink to={`/`} exact>
              Home
            </NavLink>
          </nav>
          <Switch>
            <Route path={`/:epId`}>
              <ErrorBoundary>
                <EpisodeComponent
                  episodesPending={episodesPending}
                  episodes={episodeList}
                />
              </ErrorBoundary>
            </Route>
            <Route path="/" exact>
              <HomeComponent
                summary={summary}
                id={id}
                name={name}
                showsPending={props.showsPending}
              />
            </Route>
          </Switch>
          <div className="show_subtitle pb4">
            <h3>Episode list:</h3>
          </div>
          <div className="show_ep_list">
            <EpisodesList episodes={props.episodeList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
