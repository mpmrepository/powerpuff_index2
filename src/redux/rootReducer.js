import { combineReducers } from "redux";
import { fetchShowReducer, fetchEpisodeReducer } from "./fetchShowReducer";

const rootReducer = combineReducers({
  fetchShowReducer,
  fetchEpisodeReducer,
});

export default rootReducer;
