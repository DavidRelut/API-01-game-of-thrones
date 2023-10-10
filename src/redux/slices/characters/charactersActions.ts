import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacters } from "../../../api/thronesAPI";
import { convertModelToCharacterType } from "../../helpers/convertModelToType.helper";

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async () => {
    const response = await getCharacters();
    const characters = response.map((character) =>
      convertModelToCharacterType(character)
    );
    return characters;
  }
);
