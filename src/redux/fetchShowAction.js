import {
  REQUEST_SHOW_PENDING,
  REQUEST_SHOW_SUCCESS,
  REQUEST_SHOW_FAILED,
  REQUEST_EPISODELIST_PENDING,
  REQUEST_EPISODELIST_SUCCESS,
  REQUEST_EPISODELIST_FAILED,
  REQUEST_EPISODE_PENDING,
  REQUEST_EPISODE_SUCCESS,
  REQUEST_EPISODE_FAILED,
} from "./constants";

export const fetchShow = () => (dispatch) => {
  dispatch({ type: REQUEST_SHOW_PENDING });
  fetch("https://api.tvmaze.com/shows/6771")
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_SHOW_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: REQUEST_SHOW_FAILED, payload: error }));
};

export const fetchEpisodes = () => (dispatch) => {
  dispatch({ type: REQUEST_EPISODELIST_PENDING });
  fetch("https://api.tvmaze.com/shows/6771/episodes")
    .then((response) => response.json())
    .then((data) =>
      dispatch({ type: REQUEST_EPISODELIST_SUCCESS, payload: data })
    )
    .catch((error) =>
      dispatch({ type: REQUEST_EPISODELIST_FAILED, payload: error })
    );
};

export const fetchEpisode = (epId) => (dispatch) => {
  dispatch({ type: REQUEST_EPISODE_PENDING });
  fetch(`https://api.tvmaze.com/episodes/${epId}`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_EPISODE_SUCCESS, payload: data }))
    .catch((error) =>
      dispatch({ type: REQUEST_EPISODE_FAILED, payload: error })
    );
};
