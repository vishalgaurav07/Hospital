import { Button, Box } from "@mui/material";
import React from "react";
import logo from "./Images/LOG.png";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#0956a3",
          height: "40px",
          padding: "1rem 3rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              marginLeft: "5rem",
              [theme.breakpoints.down("lg")]: {
                marginLeft: "1rem",
              },
            }}
          >
            {" "}
            <img src={logo} height="45px" width="200px" alt="Logo" />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              marginRight: "5rem",
              [theme.breakpoints.down("lg")]: {
                marginRight: "1rem",
              },
            }}
          >
            <Button variant="text" sx={{ backgroundColor: "#FAF9F6" }}>
              Home
            </Button>
            <Button variant="text" sx={{ backgroundColor: "#FAF9F6" }}>
              Doctor
            </Button>
            <Button variant="text" sx={{ backgroundColor: "#FAF9F6" }}>
              Service
            </Button>

            <Button variant="text" sx={{ backgroundColor: "#FAF9F6" }}>
              Contact
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default Header;
