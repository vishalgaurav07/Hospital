import { createTheme } from "@mui/material/styles";
// Create your custom theme

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 450,
      sm: 650, // Small devices (landscape phones)
      md: 960, // Medium devices (tablets)
      lg: 1400, // Large devices (desktops)
      xl: 3000,
    },
  },
});

export default theme;
