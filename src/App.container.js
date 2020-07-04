import { connect } from "react-redux";
import App from "./App";
import { fetchShow, fetchEpisodes } from "./redux/fetchShowAction";

const mapStateToProps = (state) => {
  return {
    showInfo: state.fetchShowReducer.showInfo,
    showsPending: state.fetchShowReducer.showsPending,
    episodeList: state.fetchEpisodeReducer.episodeList,
    episodesPending: state.fetchEpisodeReducer.episodesPending,
    episodesError: state.fetchEpisodeReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFetchShow: () => {
    dispatch(fetchShow());
  },
  onFetchEpisodes: () => {
    dispatch(fetchEpisodes());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
