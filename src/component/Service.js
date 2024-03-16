import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import Header from "./Header";
import Image from "./Images/Heroe.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";
import Cd from "./Images/Cardiology.jpg";
import Op from "./Images/othopedic.jpg";
import Nr from "./Images/neurology.jpg";
import Pd from "./Images/pediatric.jpg";

const Service = () => {
  const data = [
    {
      img: Cd,
      title: `Cardiology`,
      description: `Our expert cardiologists specialize in diagnosing and treating heart conditions and well-being, ensuring that you receive the highest standard of cardiac care to keep your heart healthy and strong.


          `,
    },
    {
      img: Op,
      title: `Orthopedics`,
      description: `From sports injuries to joint replacements, our orthopedic specialists are skilled in treating a wide range of musculoskeletal conditions, helping you regain mobility and live an active lifestyle.
          `,
    },
    {
      img: Pd,
      title: `Pediatrics`,
      description: `Our pediatric department is devoted to the health and well-being of your little ones, providing specialized care for infants, children, and adolescents in a warm and child-friendly environment.
          `,
    },
    {
      img: Nr,
      title: `Neurology`,
      description: `Our neurologists specialize in diagnosing and treating disorders of the nervous system, including neurological conditions such as epilepsy, stroke, and epilepsy, stroke multiple sclerosis.
          `,
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "60vh",
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
            Service We Offer
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
            [theme.breakpoints.down("lg")]: {
              flexDirection: "column",
            },
          }}
        >
          {data.map((d) => (
            <Card
              sx={{
                height: "450px",
                width: "350px",
                borderRadius: "10px",
                cursor: "pointer",
                "&:hover": {
                  border: "2px solid #1976d2",
                },
                [theme.breakpoints.down("lg")]: {
                  width: "350px",
                  height: "450px",
                },
              }}
            >
              <CardMedia
                component="img"
                image={d.img}
                sx={{ height: 200 }}
              ></CardMedia>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: "Times New Roman",
                      fontWeight: "bold",
                      color: "#1976d2",
                    }}
                  >
                    {d.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontFamily: "Times New Roman",
                      textAlign: "center",
                    }}
                  >
                    {d.description}
                  </Typography>
                  <ArrowForwardIcon
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "2px solid #1976d2",
                      borderRadius: "50%",
                      fontSize: "50px",
                      color: "#1976d2",
                      marginTop: "10px",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "#1976d2",
                        color: "#fff",
                      },
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default Service;
