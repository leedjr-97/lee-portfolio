import React from "react";
import {
  PaletteMode,
  alpha,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { selectMode } from "../redux/reduxSelectors";
import { useAppSelector } from "../redux/store";

declare module "@mui/material/styles" {
  interface TypeGradient {
    [key: string]: string;
  }

  interface MyPaletteOptions {
    gradient: TypeGradient;
    blue: TypeGradient;
    purple: TypeGradient;
    green: TypeGradient;
    red: TypeGradient;
    pink: TypeGradient;
    yellow: TypeGradient;
    cyan: TypeGradient;
    zinc: TypeGradient;
  }

  interface TypeBackground {
    opposite: string;
  }
}

declare module "@mui/material/styles" {
  interface Palette extends MyPaletteOptions {}
  interface PaletteOptions extends MyPaletteOptions {}
}

type Props = {
  children?: React.ReactNode;
};

export const PRIMARY = "#006FEE";
export const SECONDARY = "#663399";

const defaultBackgroundColor = {
  light: "#FCFBFA",
  dark: "#111111",
};

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const mode = useAppSelector(selectMode);
  let theme = responsiveFontSizes(
    createTheme({
      palette: {
        mode: mode as PaletteMode,
        primary: {
          main: PRIMARY,
          light: alpha(PRIMARY, 0.5),
          dark: alpha(PRIMARY, 0.9),
        },
        secondary: {
          main: SECONDARY,
          light: alpha(SECONDARY, 0.5),
          dark: alpha(SECONDARY, 0.9),
        },

        background: {
          default: mode === "dark" ? "#000000" : "#FCFBFA",
          opposite: mode === "dark" ? "#FCFBFA" : "#111111",
          paper: mode === "dark" ? "#131313" : "#FCFCFC",
        },
        text: {
          primary: mode === "dark" ? "#FFFFFFDD" : "#111111",
          secondary: "#999999",
          disabled: "#C3C1BD",
        },

        grey: {
          50: mode === "dark" ? "hsl(0, 0%, 10%)" : "hsl(0, 5%, 95%)",
          100: mode === "dark" ? "hsl(0, 0%, 20%)" : "hsl(0, 0%, 90%)",
          200: mode === "dark" ? "hsl(0, 0%, 30%)" : "hsl(0, 0%, 80%)",
          300: mode === "dark" ? "hsl(0, 0%, 40%)" : "hsl(0, 0%, 70%)",
          400: mode === "dark" ? "hsl(0, 0%, 50%)" : "hsl(0, 0%, 60%)",
          500: mode === "dark" ? "hsl(0, 0%, 60%)" : "hsl(0, 0%, 50%)",
          600: mode === "dark" ? "hsl(0, 0%, 70%)" : "hsl(0, 0%, 40%)",
          700: mode === "dark" ? "hsl(0, 0%, 80%)" : "hsl(0, 0%, 30%)",
          800: mode === "dark" ? "hsl(0, 0%, 90%)" : "hsl(0, 0%, 20%)",
          900: mode === "dark" ? "hsl(0, 5%, 95%)" : "hsl(0, 0%, 10%)",
        },
        blue: {
          50: "#E6F1FE",
          100: "#CCE3FD",
          200: "#99C7FB",
          300: "#66AAF9",
          400: "#338EF7",
          500: "#006FEE",
          600: "#005BC4",
          700: "#004493",
          800: "#002E62",
          900: "#001731",
        },
        purple: {
          50: "#F2EAFA",
          100: "#E4D4F4",
          200: "#C9A9E9",
          300: "#AE7EDE",
          400: "#9353D3",
          500: "#7828C8",
          600: "#6020A0",
          700: "#481878",
          800: "#301050",
          900: "#180828",
        },
        green: {
          50: "#E8FAF0",
          100: "#D1F4E0",
          200: "#A2E9C1",
          300: "#74DFA2",
          400: "#45D483",
          500: "#17C964",
          600: "#12A150",
          700: "#0E793C",
          800: "#095028",
          900: "#052814",
        },
        red: {
          50: "#FEE7EF",
          100: "#FDD0DF",
          200: "#FAA0BF",
          300: "#F871A0",
          400: "#F54180",
          500: "#F31260",
          600: "#C20E4D",
          700: "#920B3A",
          800: "#610726",
          900: "#310413",
        },
        pink: {
          50: "#FFEDFA",
          100: "#FFDCF5",
          200: "#FFB8EB",
          300: "#FF95E1",
          400: "#FF71D7",
          500: "#FF4ECD",
          600: "#CC3EA4",
          700: "#992F7B",
          800: "#661F52",
          900: "#331029",
        },
        yellow: {
          50: "#FEFCE8",
          100: "#FDEDD3",
          200: "#FBDBA7",
          300: "#F9C97C",
          400: "#F7B750",
          500: "#F5A524",
          600: "#C4841D",
          700: "#936316",
          800: "#62420E",
          900: "#312107",
        },
        cyan: {
          50: "#F0FCFF",
          100: "#E6FAFE",
          200: "#D7F8FE",
          300: "#C3F4FD",
          400: "#A5EEFD",
          500: "#7EE7FC",
          600: "#06B7DB",
          700: "#09AACD",
          800: "#0E8AAA",
          900: "#053B48",
        },
        zinc: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          700: "#3F3F46",
          800: "#27272A",
          900: "#18181B",
        },
        gradient: {
          bronze: "linear-gradient(180deg, #9C6D3E 0%, #E8C8A9 100%)",
          silver: "linear-gradient(180deg, #808080 0%, #DFDFDF 100%)",
          gold: "linear-gradient(180deg, #A3873C 0%, #E3D294 100%)",
        },
      },

      typography: {
        fontFamily: ["Manrope", "Inter"].join(","),

        h1: {
          fontFamily: "Manrope",
          fontWeight: "600",
          fontSize: "72px",
          lineHeight: 1.2,
        },
        h2: {
          fontFamily: "Manrope",
          fontWeight: "600",
          fontSize: "62px",
          lineHeight: 1.2,
        },
        h3: {
          fontFamily: "Manrope",
          fontWeight: "600",
          fontSize: "50px",
          lineHeight: 1.2,
        },
        h4: {
          fontFamily: "Manrope",
          fontWeight: "700",
          fontSize: "32px",
          lineHeight: 1.2,
        },
        h5: {
          fontFamily: "Manrope",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: 1.2,
        },
        h6: {
          fontFamily: "Manrope",
          fontWeight: "700",
          fontSize: "20px",
          lineHeight: 1.2,
        },

        body1: {
          fontFamily: "Inter",
          fontSize: "14px",
          fontWeight: "400",
        },
        body2: {
          fontFamily: "Inter",
          fontSize: "13px",
          fontWeight: "400",
        },
      },
      components: {
        //   MuiCssBaseline: {
        //     styleOverrides: `
        //       @font-face {
        //           font-family: 'Lexend';
        //           src: local('Lexend'), local('Lexend-Light'), url(${LexendLight}) format('truetype');
        //           font-weight: 300;
        //           font-style: normal;
        //           font-display: swap;
        //         }
        //       @font-face {
        //           font-family: 'Lexend';
        //           src: local('Lexend'), local('Lexend-Regular'), url(${Lexend}) format('truetype');
        //           font-weight: 400;
        //           font-style: normal;
        //           font-display: swap;
        //         }
        //       @font-face {
        //           font-family: 'Lexend';
        //           src: local('Lexend'), local('Lexend-Bold'), url(${LexendBold}) format('truetype');
        //           font-weight: 600;
        //           font-style: normal;
        //           font-display: swap;
        //         }
        //       @font-face {
        //           font-family: 'Lexend';
        //           src: local('Lexend'), local('Lexend-Medium'), url(${LexendMedium}) format('truetype');
        //           font-weight: 500;
        //           font-style: normal;
        //           font-display: swap;
        //         }
        //       `,
        //   },
        MuiLink: {
          styleOverrides: {
            root: {
              cursor: "pointer",
              textDecoration: "none",
              lineHeight: "16px",
              transition: "all 0.1s ease-in-out",
              "&:hover": {
                opacity: 0.8,
              },
            },
          },
        },
        MuiIconButton: {
          styleOverrides: {
            root: {
              aspectRatio: "1/1",
            },
          },
        },
        MuiToolbar: {
          styleOverrides: {
            root: {
              justifyContent: "space-between",
              backgroundColor: alpha(defaultBackgroundColor[mode], 0.85),
              backdropFilter: "blur(6px)",
            },
          },
        },
        MuiContainer: {
          styleOverrides: {
            root: {},
          },
        },
        MuiTooltip: {
          styleOverrides: {
            tooltip: {
              backgroundColor: "#404446",
              opacity: 1,
            },
          },
        },
      },
    })
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
