import { API_BASE_URL } from "./baseURL";
import { ICharacterListModel } from "./models";

export const getCharacters = async (): Promise<ICharacterListModel> => {
  const response = await fetch(`${API_BASE_URL}/Characters`);
  const characters: ICharacterListModel = await response.json();
  return characters;
};
