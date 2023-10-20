import { FC } from "react";
import styled from "styled-components";
import { theme } from "../../themes";

interface IButtonProps {
  label?: string | null;
  onClick: () => void;
}

const Button: FC<IButtonProps> = ({ onClick, label }) => {
  return (
    <ButtonStyled onClick={onClick}>
      <b>{label}</b>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  text-transform: uppercase;
  font-size: ${theme.fonts.P0};
  padding: 12px 20px;
  margin-bottom: 15px;
  border-radius: ${theme.borderRadius.extraRound};
  background-color: ${theme.colors.primary};
  border: none;
  cursor: pointer;
  color: ${theme.colors.secondary};
`;

export default Button;
