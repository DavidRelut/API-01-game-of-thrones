import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { theme } from "../../themes";
import { FC } from "react";

interface ICasinoEffectProps {
  count: number;
}

const CasinoEffect: FC<ICasinoEffectProps> = ({ count }) => {
  return (
    <TransitionGroup component={CasinoEffectStyled}>
      <CSSTransition classNames={"count-animated"} timeout={300} key={count}>
        <span>{count}</span>
      </CSSTransition>
    </TransitionGroup>
  );
};

const CasinoEffectStyled = styled.div`
  position: absolute;
  overflow-y: hidden;
  overflow-x: hidden;

  right: 5%;
  top: 3%;

  span {
    display: inline-block;
    font-size: ${theme.fonts.P3};
    color: ${theme.colors.counter};
    border-radius: ${theme.borderRadius.circle};
    padding: 4px;
    border: 2px solid ${theme.colors.counter};
  }

  .count-animated-enter {
    transform: translateY(100%);
  }

  .count-animated-enter-active {
    transform: translateY(0%);
    transition: ${theme.animations.speed.quick};
  }

  .count-animated-enter-done {
  }

  .count-animated-exit {
    transform: translateY(0%);
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .count-animated-exit-active {
    transform: translateY(-100%);
    transition: ${theme.animations.speed.quick};
  }
`;

export default CasinoEffect;
