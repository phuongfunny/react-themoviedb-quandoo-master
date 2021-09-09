import { call, put, takeLatest } from "redux-saga/effects";
import movieAPI from "../../service/movieAPI";
import {
  getPeopleMovieFail,
  getPeopleMovieRequest,
  getPeopleMovieSuccess,
} from "./peopleSlice";

function* getPeoplelMovie(action) {
  try {
    const response = yield call(movieAPI.getPeople, action.payload.id);
    yield put(getPeopleMovieSuccess(response));
  } catch (error) {
    yield put(getPeopleMovieFail(error));
  }
}
function* watchGetPeople() {
  yield takeLatest(getPeopleMovieRequest.type, getPeoplelMovie);
}
const saga = [watchGetPeople()];
export default saga;
