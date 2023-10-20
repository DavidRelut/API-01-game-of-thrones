type TColors = {
  background_card: string | number;
  primary: string | number;
  secondary: string | number;
  counter: string;
};

type TSpacing = {
  xxs: string | number;
  xs: string | number;
  sm: string | number;
  md: string | number;
  lg: string | number;
  xl: string | number;
  xxl: string | number;
};

type TFonts = {
  XXXS: string | number;
  XXS: string | number;
  XS: string | number;
  P0: string | number;
  P1: string | number;
  P2: string | number;
  P3: string | number;
  P4: string | number;
  P5: string | number;
  P6: string | number;
};

type TBorderRadius = {
  subtle: string | number;
  round: string | number;
  extraRound: string | number;
  circle: string | number;
};

type TWeights = {
  light: string | number;
  regular: string | number;
  medium: string | number;
  semiBold: string | number;
  bold: string | number;
  heavy: string | number;
};

type TAnimations = {
  speed: {
    quick: string;
    medium: string;
    slow: string;
  };
};

export type { TColors, TSpacing, TFonts, TBorderRadius, TWeights, TAnimations };
