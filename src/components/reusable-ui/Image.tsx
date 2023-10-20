import { FC } from "react";
import styled from "styled-components";
import { theme } from "../../themes";
import CasinoEffect from "./CasinoEffect";

interface IImageProps {
  imageUrl: string;
  fullName: string;
  indexPosition: number;
}

const Image: FC<IImageProps> = ({ imageUrl, fullName, indexPosition }) => {
  return (
    <ImageStyled>
      <CasinoEffect count={indexPosition} />
      <img src={imageUrl} alt={fullName} />
    </ImageStyled>
  );
};

const ImageStyled = styled.div`
  position: relative;

  .indexPosition {
    font-size: ${theme.fonts.P0};
    border: 2px solid red;
  }

  img {
    width: 400px;
    height: 500px;
  }
`;

export default Image;
