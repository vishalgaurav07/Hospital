import { Box, CardMedia, Typography, Card } from "@mui/material";
import React from "react";
import Header from "./Header";
import HeroImage from "./Images/Hr.jpg";
import Service from "./Service";
import About from "./About";
import Footer from "./Footer";
import Form from "./Form";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";

const Hero = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header />
        <Box
          sx={{
            minHeight: "90vh",
            backgroundColor: "#1976d2",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            //   alignItems: "center",
            [theme.breakpoints.down("lg")]: {
              flexDirection: "column",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              flexDirection: "column",
              marginTop: "120px",
              // marginLeft: "6rem",
              maxWidth: "800px",
              gap: "2em",
              [theme.breakpoints.down("lg")]: {
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "100%",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "60px",
                fontFamily: "Times New Roman",
                fontWeight: "bold",
                color: "#000",

                [theme.breakpoints.down("lg")]: {
                  maxWidth: "100%",
                },
              }}
            >
              Welcome to <span style={{ color: "#fff" }}> Medicare </span>
              Hospital !
            </Typography>
            <Typography
              sx={{
                fontSize: "45px",
                fontFamily: "Times New Roman",
                fontWeight: "bold",
                color: "#FCF5E5",
                maxWidth: "500px",
                textDecoration: "underline",
                [theme.breakpoints.down("lg")]: {
                  maxWidth: "100%",
                },
              }}
            >
              "<span style={{ color: "#000" }}>E</span>mpowering{" "}
              <span style={{ color: "#000" }}>H</span>ealth,{" "}
              <span style={{ color: "#000" }}>E</span>nriching
              <span style={{ color: "#000" }}>L</span>ives."
            </Typography>
            <Typography
              sx={{
                fontSize: "25px",
                fontFamily: "Times New Roman",
                maxWidth: "600px",
                color: "#FCF5E5",
                [theme.breakpoints.down("lg")]: {
                  maxWidth: "60%",
                },
              }}
            >
              <span
                style={{ color: "#000", fontWeight: "bold", fontSize: "28px" }}
              >
                Medicare
              </span>{" "}
              is the leading hospital with the best medical expertise,
              cutting-edge technology, and compassionate care.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              [theme.breakpoints.down("lg")]: {
                padding: "2rem",
              },
            }}
          >
            <Card sx={{ boxShadow: "0px 0px 8px 0px #fff" }}>
              <CardMedia
                image={HeroImage}
                sx={{
                  height: "650px",
                  width: "800px",
                  [theme.breakpoints.down("lg")]: {
                    display: "none",
                  },
                }}
              ></CardMedia>
            </Card>
          </Box>
        </Box>
        <Service />
        <About />
        <Form />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};
export default Hero;
