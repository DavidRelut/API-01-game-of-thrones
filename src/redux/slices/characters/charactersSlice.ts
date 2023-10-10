import { createSlice } from "@reduxjs/toolkit";
import { ICharacterState } from "./charactersTypes";
import { TRootState } from "../../types";
import { fetchCharacters } from "./charactersActions";

const initialState: ICharacterState = {
  characters: [],
  status: "idle",
  error: null,
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.characters = payload || [];
      })
      .addCase(fetchCharacters.rejected, (state, { error }) => {
        state.status = "failed";
        state.error = error.message || "An error occured";
      });
  },
});

export const selectCharacters = (state: TRootState) => state.characters;
export default charactersSlice.reducer;
