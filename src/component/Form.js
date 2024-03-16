import React, { useState } from "react";

import theme from "./theme";
import { ThemeProvider } from "@emotion/react";

import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  Snackbar,
  Alert,
  AlertTitle,
} from "@mui/material";

import Grid from "@mui/material/Grid";
import { TextareaAutosize } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import InputAdornment from "@mui/material/InputAdornment";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);

  const handleDemoSubmit = async (e) => {
    e.preventDefault();

    if (
      !reason ||
      !name ||
      !email ||
      !phone ||
      !message ||
      !isCheckboxSelected
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    const data = {
      reason: reason,
      name: name,
      email: email,

      phone: phone,
      message: message,
    };

    const url =
      "https://script.google.com/macros/s/AKfycbxfnmBLX5wUdFYcZMDq3S9x3rdCOwH5l6wPLMrT18Up5AUEg6yL4cYl-PBV9gq-1B4t/exec";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setSubmitMessage("Submission successful."); // Set success message
        setOpen(true);
        setReason("");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((err) => console.log("err", err));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickAway") {
      return;
    }
    setOpen(false);
  };

  const customStyles = {
    main: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "20px",
      minHeight: "70vh",

      backgroundColor: "#FCF5E5",
    },
    button: {
      width: "200px",
      height: "50px",
      background: "linear-gradient(270deg, #FFE249 6.69%, #B49701 74.02%)",
      boxShadow: "0px 8px 6px rgba(255, 226, 73, 0.15)",
      borderRadius: "20px",
      color: "#000",
      textTransform: "capitalize",
      fontWeight: "bold",
      fontSize: "22px",
      fontFamily: "poppins",
      marginTop: "1rem",
    },
    Container: {
      background: "#FCF5E5",
      borderRadius: "20px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "100%",
      minHeight: "70vh",
      boxShadow: "0px 0px 8px 0px #82ccff",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          ...customStyles.main,
          display: "flex",
          flexDirection: "row",
          //   width: "100%",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            padding: "5rem",
          },
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            padding: "5rem 2rem",
          },
          [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            padding: "5rem 0.8rem",
          },
        }}
      >
        <Box
          sx={{
            ...customStyles.Container,
            display: "flex",
            flexDirection: "column",
            padding: "1rem 4rem",
            margin: "5rem",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Times New Roman",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "38px",
              color: "#0956a3",
              [theme.breakpoints.down("xs")]: {
                fontSize: "25px",
                fontWeight: 500,
              },
            }}
          >
            Raise Your Query
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        textAlign: "left",
                        marginTop: "1rem",
                        [theme.breakpoints.down("xs")]: {
                          fontSize: "15px",
                          marginTop: "0.5rem",
                        },
                      }}
                    >
                      Reason for contacting: <span>*</span>
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(217, 217, 217, 0.5)",
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <BusinessIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Typography
                      sx={{
                        textAlign: "left",
                        [theme.breakpoints.down("md")]: {
                          marginTop: "1rem",
                        },
                        [theme.breakpoints.down("xs")]: {
                          fontSize: "15px",
                          marginTop: "0.5rem",
                        },
                      }}
                    >
                      Name <span>*</span>
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      sx={{
                        width: "100%",
                        backgroundColor: "rgba(217, 217, 217, 0.5)",
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <PersonIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Typography
                      sx={{
                        textAlign: "left",
                        marginTop: "1rem",
                        [theme.breakpoints.down("xs")]: {
                          fontSize: "15px",
                          marginTop: "0.5rem",
                        },
                      }}
                    >
                      Email <span>*</span>
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(217, 217, 217, 0.5)",
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <Typography
                      sx={{
                        textAlign: "left",
                        marginTop: "1rem",
                        [theme.breakpoints.down("xs")]: {
                          fontSize: "15px",
                          marginTop: "0.5rem",
                        },
                      }}
                    >
                      Phone Number <span>*</span>
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(217, 217, 217, 0.5)",
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <PhoneInTalkIcon />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <Typography
                      sx={{
                        textAlign: "left",
                        marginTop: "1rem",
                        [theme.breakpoints.down("xs")]: {
                          fontSize: "15px",
                          marginTop: "0.5rem",
                        },
                      }}
                    >
                      Message <span>*</span>
                    </Typography>
                    <TextareaAutosize
                      id="outlined-basic"
                      minRows={7}
                      placeholder="Write Your Message"
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(217, 217, 217, 0.5)",
                        fontSize: "16px",
                      }}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "1rem",
                    [theme.breakpoints.down("xs")]: {
                      marginTop: "0.5rem",
                    },
                  }}
                >
                  <Box>
                    <Checkbox
                      sx={{ color: "#000" }}
                      checked={isCheckboxSelected}
                      onChange={(e) => setIsCheckboxSelected(e.target.checked)}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        textAlign: "left",
                        [theme.breakpoints.down("xs")]: {
                          fontSize: "15px",
                          lineHeight: "20px",
                          textAlign: "left",
                        },
                      }}
                    >
                      I agree to the Terms & Conditions
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    width: "200px",
                    height: "50px",
                    background: "0956a3",
                    boxShadow: "0px 8px 6px rgba(255, 226, 73, 0.15)",
                    borderRadius: "20px",
                    color: "#fff",
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: "22px",
                    fontFamily: "poppins",
                    marginTop: "1rem",
                    [theme.breakpoints.down("xs")]: {
                      width: "140px",
                      height: "35px",
                      fontSize: "15px",
                    },
                  }}
                  onClick={handleDemoSubmit}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={submitMessage}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        ContentProps={{
          sx: customStyles.alert,
        }}
      >
        <Alert onClose={handleClose} severity="success">
          <AlertTitle>Success</AlertTitle>
          {submitMessage}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};
export default Form;
