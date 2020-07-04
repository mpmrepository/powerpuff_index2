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

const initialStateShowList = {
  showsPending: false,
  showInfo: {},
};

export const fetchShowReducer = (state = initialStateShowList, action = {}) => {
  switch (action.type) {
    case REQUEST_SHOW_PENDING:
      return Object.assign({}, state, {
        showsPending: true,
      });
    case REQUEST_SHOW_SUCCESS:
      return Object.assign({}, state, {
        showInfo: action.payload,
        showsPending: false,
      });
    case REQUEST_SHOW_FAILED:
      return Object.assign({}, state, {
        showsPending: false,
      });
    default:
      return state;
  }
};

const initialEpisodeList = {
  episodesPending: true,
  error: "",
  episodeList: [],
};

export const fetchEpisodeReducer = (
  state = initialEpisodeList,
  action = {}
) => {
  switch (action.type) {
    case REQUEST_EPISODELIST_PENDING:
      return Object.assign({}, state, { episodesPending: true });
    case REQUEST_EPISODELIST_SUCCESS:
      return Object.assign({}, state, {
        episodeList: action.payload,
        episodesPending: false,
      });
    case REQUEST_EPISODELIST_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        episodesPending: false,
      });
    default:
      return state;
  }
};
