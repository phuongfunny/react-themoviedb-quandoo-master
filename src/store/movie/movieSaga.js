import { call, put, takeLatest } from "redux-saga/effects";
import movieAPI from "../../service/movieAPI";
import {
  getListMoviesFail,
  getListMoviesRequest,
  getListMoviesSuccess,
  getDetailMovieFail,
  getDetailMovieRequest,
  getDetailMovieSuccess,
} from "./movieSlice";

export const getProject = (state) => state.movies;

function* getListMovies(action) {
  try {
    const response = yield call(movieAPI.getAll, action.payload.page);
    yield put(getListMoviesSuccess(response.results));
  } catch (error) {
    yield put(getListMoviesFail(error));
  }
}
function* getDetailMovie(action) {
  try {
    const response = yield call(movieAPI.getDetailMovie, action.payload.id);
    yield put(getDetailMovieSuccess(response));
    //return response;
  } catch (error) {
    yield put(getDetailMovieFail(error));
  }
}
function* watchGetList() {
  yield takeLatest(getListMoviesRequest.type, getListMovies);
}
function* watchGetDetail() {
  yield takeLatest(getDetailMovieRequest.type, getDetailMovie);
}
const saga = [watchGetList(), watchGetDetail()];
export default saga;
