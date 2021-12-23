import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../Api/movieApi';
import { APIKey } from '../../Api/movieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async (term) => {
    const res = await movieApi.get(`?apikey=${APIKey}&s=${term}&type=movie`);
    return res.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async (term) => {
    const res = await movieApi.get(`?apikey=${APIKey}&s=${term}&type=series`);
    return res.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  'movies/fetchAsyncMovieOrShowDetail',
  async (id) => {
    const res = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
    return res.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieorShow: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieorShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('Pending');
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('Rejected!');
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log('Fetch Successfully!');
      return { ...state, movies: payload };
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log('Fetch Successfully!');
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log('Fetch Successfully!');
      return { ...state, selectMovieorShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieorShow;
export default movieSlice.reducer;
