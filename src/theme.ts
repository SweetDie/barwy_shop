import { createTheme } from "@mui/material";
import { red, teal } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
      primary: {
        main: red[500]
      },
      secondary: {
        main: teal[400]
      }
    }
  });