import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { selectCharacters } from "../../../redux/slices/characters/charactersSlice";
import { fetchCharacters } from "../../../redux/slices/characters/charactersActions";

// JSX STYLE (STYLED-COMPONENTS)

// COMPONENT
const MainPage: FC = () => {
  // STATE
  const { characters } = useAppSelector(selectCharacters);

  const dispatch = useAppDispatch();

  // STOCK DATA AND REFERENCE
  const character = characters[0];

  // BEHAVIOR
  useEffect(() => {
    dispatch(fetchCharacters());
    // eslint-disable-next-line
  }, []);

  // JSX
  return <div>{character?.fullName}</div>;
};

export default MainPage;
