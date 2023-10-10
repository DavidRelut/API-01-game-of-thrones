export interface ICharacterModel {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string; // ✔️ → ICharacter
  title: string; // ✔️ → ICharacter
  family: string; // ✔️ → ICharacter
  image: string;
  imageUrl: string; // ✔️ → ICharacter
}

export interface ICharacterListModel extends Array<ICharacterModel> {}
