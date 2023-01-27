import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
      primary: {
        main: red[500]
      },
      secondary: {
        main: grey[600]
      }
    }
  });