import React from "react";
import { Box, Typography, Button, CardMedia, Card } from "@mui/material";
import Image from "./Images/doc.png";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "70vh",
          backgroundColor: "#FCF5E5",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          <Typography
            sx={{
              height: "43px",
              fontFamily: "Times New Roman",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "46px",
              color: "#1976d2",
              fontSize: "40px",
              textDecoration: "underline",
            }}
          >
            Our Docters
          </Typography>
        </Box>

        <Box
          sx={{
            padding: "1rem 2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            [theme.breakpoints.down("lg")]: {
              flexDirection: "column",
              gap: "50px",
            },
          }}
        >
          <Box
            sx={{
              maxWidth: "800px",
              padding: "0rem 2rem",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Times New Roman",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#000",
              }}
            >
              Meet our team of experienced and caring physicians who are
              dedicated to improving the health and well-being of our patients.
              With expertise in various specialties, our doctors are here to
              provide personalized care tailored to your needs.
            </Typography>
            <Box sx={{ gap: "5px", display: "flex", marginTop: "3rem" }}>
              <Button variant="contained">Expert</Button>
              <Button variant="contained">Empathetic</Button>
              <Button variant="contained">Professional</Button>
            </Box>
            <Box sx={{ gap: "25px", display: "flex", marginTop: "1rem" }}>
              <Button variant="contained">Experienced</Button>
              <Button variant="contained">Caring</Button>
            </Box>
            <Box sx={{ gap: "25px", display: "flex", marginTop: "1rem" }}>
              <Button variant="contained">Personable</Button>
              <Button variant="contained">Trustworthy</Button>
              <Button variant="contained">Dedicated</Button>
            </Box>
            <Box sx={{ gap: "25px", display: "flex", marginTop: "1rem" }}>
              <Button variant="contained">Skilled</Button>
              <Button variant="contained">Compassionate</Button>
            </Box>
          </Box>
          <Box>
            <Card
              sx={{
                backgroundColor: "#FCF5E5",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#fff",
                },
              }}
            >
              <CardMedia
                image={Image}
                sx={{
                  height: "500px",
                  width: "800px",
                  [theme.breakpoints.down("lg")]: {
                    width: "650px",
                  },
                }}
              ></CardMedia>
            </Card>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default About;
