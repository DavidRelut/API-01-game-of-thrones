import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { selectCharacters } from "../../../redux/slices/characters/charactersSlice";
import { fetchCharacters } from "../../../redux/slices/characters/charactersActions";
import { ECharacter } from "../../../enum/character.enum";
import Card from "../../reusable-ui/Card";
import styled from "styled-components";
import { resetIndex } from "./helpers/reset.helper";

const MainPage: FC = () => {
  const { characters } = useAppSelector(selectCharacters);
  const [characterIndex, setCharacterIndex] = useState(ECharacter.INDEX);

  const dispatch = useAppDispatch();

  const character = characters[characterIndex];

  useEffect(() => {
    dispatch(fetchCharacters());
    // eslint-disable-next-line
  }, []);

  const handleClick = () => {
    const newIndex = resetIndex(characterIndex, characters);
    setCharacterIndex(newIndex);
  };

  return (
    <MainPageStyled>
      <Card
        fullName={character?.fullName}
        imageUrl={character?.imageUrl}
        onClick={handleClick}
        indexPosition={characterIndex}
      />
    </MainPageStyled>
  );
};

const MainPageStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MainPage;
