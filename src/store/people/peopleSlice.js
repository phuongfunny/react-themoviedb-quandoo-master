import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_STATE } from "../../constant/index";
import { DEFAULT_FAILURE, DEFAULT_SUCCESS } from "../../util/store";

//create reducer
//setup default state in constant
const initialState = {
  ...DEFAULT_STATE,
  list: [],
};
const peopleMovieSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    getPeopleMovieRequest: (state) => {
      state.loading = !state.loading;
    },
    getPeopleMovieSuccess: (state, action) => {
      DEFAULT_SUCCESS(state, action);
    },
    getPeopleMovieFail: (state, action) => {
      DEFAULT_FAILURE(state, action);
    },
  },
});

//actions
export const {
  getPeopleMovieRequest,
  getPeopleMovieSuccess,
  getPeopleMovieFail,
} = peopleMovieSlice.actions;

export default peopleMovieSlice.reducer;
