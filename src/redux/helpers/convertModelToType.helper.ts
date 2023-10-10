import { ICharacterModel } from "../../api/models";
import { ICharacter } from "../slices/characters/charactersTypes";

export const convertModelToCharacterType = (
  character: ICharacterModel
): ICharacter => {
  return {
    fullName: character?.fullName,
    title: character?.title,
    family: character?.family,
    imageUrl: character?.imageUrl,
  };
};
