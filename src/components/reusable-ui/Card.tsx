import { FC } from "react";
import Image from "./Image";
import styled from "styled-components";
import { theme } from "../../themes";
import Button from "./Button";

interface ICardProps {
  fullName: string;
  imageUrl: string;
  onClick: () => void;
  indexPosition: number;
}

const Card: FC<ICardProps> = ({
  fullName,
  imageUrl,
  onClick,
  indexPosition,
}) => {
  return (
    <CardStyled>
      <Image
        fullName={fullName}
        imageUrl={imageUrl}
        indexPosition={indexPosition}
      />
      <b className="fullName">{fullName}</b>
      <Button onClick={onClick} label={"Next characters"} />
    </CardStyled>
  );
};

const CardStyled = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.background_card};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};

  .fullName {
    margin: 20px 0;
  }
`;

export default Card;
