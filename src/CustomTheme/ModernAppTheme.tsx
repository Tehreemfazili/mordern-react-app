import { createTheme } from "@mui/material";

// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }

//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }

export const theme = createTheme ({
  palette: {
    primary: {
      main: 'rgb(216, 191, 216)'
    },
    secondary: {main: 
      '#feedfc' 
      }
    },
    typography:{
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    }
});