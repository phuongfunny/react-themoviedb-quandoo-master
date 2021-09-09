import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_STATE } from "../../constant/index";
import { DEFAULT_FAILURE } from "../../util/store";

//create reducer
//setup default state in constant
const initialState = {
  ...DEFAULT_STATE,
  list: [],
  detail: [],
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getListMoviesRequest: (state, action) => {
      state.loading = true;
    },
    getListMoviesSuccess: (state, action) => {
      state.loading = false;
      state.list.push(action.payload);
    },
    getListMoviesFail: (state, action) => {
      DEFAULT_FAILURE(state, action);
    },
    getDetailMovieRequest: (state) => {
      state.loading = true;
    },
    getDetailMovieSuccess: (state, action) => {
      state.loading = false;
      state.detail = action.payload;
    },
    getDetailMovieFail: (state, action) => {
      DEFAULT_FAILURE(state, action);
    },
  },
});

//actions
export const {
  toggleLoading,
  getListMoviesRequest,
  getListMoviesSuccess,
  getListMoviesFail,
  getDetailMovieRequest,
  getDetailMovieSuccess,
  getDetailMovieFail,
} = movieSlice.actions;

export default movieSlice.reducer;
