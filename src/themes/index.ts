import type {
  TBorderRadius,
  TColors,
  TFonts,
  TSpacing,
  TWeights,
  TAnimations,
} from "./types";

const colors: TColors = {
  background_card: "#bde0fe",
  primary: "#ffc8dd",
  secondary: "#219ebc",
  counter: "#FFD700",
};

const fonts: TFonts = {
  XXXS: "8px",
  XXS: "10px",
  XS: "12px",
  P0: "16px",
  P1: "18px",
  P2: "20px",
  P3: "24px",
  P4: "36px",
  P5: "48px",
  P6: "60px",
};

const spacing: TSpacing = {
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "20px",
  lg: "32px",
  xl: "52px",
  xxl: "84px",
};

const borderRadius: TBorderRadius = {
  subtle: "1px",
  round: "5px",
  extraRound: "20px",
  circle: "50%",
};

const weights: TWeights = {
  light: "300px",
  regular: "400px",
  medium: "500px",
  semiBold: "600px",
  bold: "700px",
  heavy: "800px",
};

const animations: TAnimations = {
  speed: {
    quick: "300ms",
    medium: "400ms",
    slow: "500ms",
  },
};

export const theme = {
  colors,
  fonts,
  borderRadius,
  weights,
  spacing,
  animations,
};
