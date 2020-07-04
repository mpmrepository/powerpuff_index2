import { connect } from "react-redux";
import EpisodeComponent from "./episode.component";
import { fetchShow, fetchEpisodes } from "../../redux/fetchShowAction";

const mapStateToProps = (state) => {
  return {
    showInfo: state.fetchShowReducer.showInfo,
    showsPending: state.fetchShowReducer.showsPending,
    episodeList: state.fetchEpisodeReducer.episodeList,
    episodesPending: state.fetchEpisodeReducer.episodesPending,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFetchEpisode: () => {
    dispatch(fetchEpisode());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeComponent);
