import { ECharacter } from "../../../../enum/character.enum";
import { ICharacter } from "../../../../redux/slices/characters/charactersTypes";

export const resetIndex = (
  currentIndex: number,
  list: ICharacter[]
): number => {
  const listLength = list.length - 1;
  return currentIndex === listLength ? ECharacter.INDEX : currentIndex + 1;
};
