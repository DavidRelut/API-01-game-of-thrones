export interface ICharacter {
  fullName: string; // ✔️ → get from ICharacterModel
  title: string; // ✔️ → get from ICharacterModel
  family: string; // ✔️ → get from ICharacterModel
  imageUrl: string; // ✔️ → get from ICharacterModel
}

export interface ICharacterState {
  characters: ICharacter[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}
