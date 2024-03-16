import React, { useState } from "react";
import { Button, TextField, ThemeProvider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { LinkedIn } from "@mui/icons-material";
import Logo from "./Images/LOG.png";
import theme from "./theme";

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "30vh",
          backgroundColor: "#0956a3",
          color: "#fff",
          p: 0.01,
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            maxWidth: "100%",
            minHeight: "30vh",
            backgroundColor: "#0956a3",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: "20px",
            paddingLeft: "20px",
            paddingRight: "20px",
            padding: "00rem 8.5rem",
            [theme.breakpoints.down("lg")]: {
              padding: "0rem 2rem",
            },
          }}
        >
          <Box
            sx={{
              width: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "1rem",
              gap: "1rem",
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: "150px",
                height: "40px",
                display: "flex",
                textAlign: "left",
                cursor: "pointer",
              }}
            />
            <Typography sx={{}}>
              Medicare is the leading hospital with the best medical expertise,
              cutting-edge technology, and compassionate care.
            </Typography>
            <Box>
              <LinkedIn
                sx={{
                  fontSize: "30px",
                  cursor: "pointer",
                  transition: "color 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    color: "#fff",
                    transform: "scale(1.2)",
                  },
                }}
              />
              <TwitterIcon
                sx={{
                  marginLeft: "0.5rem",
                  fontSize: "30px",
                  cursor: "pointer",
                  transition: "color 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    color: "#fff",
                    transform: "scale(1.2)",
                  },
                }}
              />
              <InstagramIcon
                sx={{
                  marginLeft: "0.5rem",
                  fontSize: "30px",
                  cursor: "pointer",
                  transition: "color 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    color: "#fff",
                    transform: "scale(1.2)",
                  },
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "1rem",
              gap: "1rem",
            }}
          >
            <Typography sx={{ fontSize: "20px" }}>UseFull Links</Typography>
            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              Our Services
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              Join as a Doctor
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              What We Offer
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              Contact Us
            </Typography>
          </Box>

          <Box
            sx={{
              width: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "1rem",
              gap: "0.5rem",
            }}
          >
            <Typography sx={{ fontSize: "18px" }}>NewsLetter</Typography>
            <Typography>Subscribe us to weekly newsletter</Typography>

            <TextField
              id="email"
              placeholder="Email"
              type="email"
              pattern="^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i"
              required
              sx={{ backgroundColor: "#fff" }}
            />

            <Button
              sx={{
                border: "1px solid #fff",
                borderRadius: "104px",
                width: "90px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                marginTop: "0.7rem",
                color: "#fff",
                "&:hover": {
                  color: "#fff",
                  border: "1px solid #fff",
                },
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #fff",
            margin: "0rem 8.5rem",
          }}
        ></Box>
        <Box sx={{}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0rem 8.5rem",
              margin: "20px 0rem",
            }}
          >
            <Typography> 2024 &copy; Medicare Hospital.</Typography>

            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              Privacy Policy
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
