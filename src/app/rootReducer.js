import { combineReducers } from "@reduxjs/toolkit";
import movies from "../store/movie/movieSlice";
import people from "../store/people/peopleSlice";
const reducer = combineReducers({
  movies,
  people,
});
export default reducer;
