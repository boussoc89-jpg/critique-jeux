import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async (params) => {
    const response = await axios.get(
      "https://critique-jeux.onrender.com/api/games",
      {
        params,
      },
    );
    return response.data.results;
  },
);

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    items: [],
    loading: false,
    error: null,
    searchQuery: "",
    ordering: "",
    genre: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.searchQuery = action.payload;
    },
    setOrdering: (state, action) => {
      state.ordering = action.payload;
    },
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSearch, setOrdering, setGenre } = gamesSlice.actions;
export default gamesSlice.reducer;
