import { all } from "redux-saga/effects";
import movie from "../store/movie/movieSaga";
import peopleMovie from "../store/people/peopleSaga";
export default function* rootSaga() {
  yield all([...movie, ...peopleMovie]);
}
