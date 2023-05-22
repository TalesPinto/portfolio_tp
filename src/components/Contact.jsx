import emailjs from "@emailjs/browser"
import React, { useRef } from "react"
import {
  Box,
  Typography,
  createTheme,
  ThemeProvider,
  TextField,
  Button,
  Grid,
  Tooltip,
} from "@mui/material"
import github from "./../icons/github.png"
import linkedin from "./../icons/linkedin.png"

export default function Contact() {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        "talespinto",
        "template_x1idwv9",
        form.current,
        "rc-dic6-n1xYQooHz"
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  const formTheme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#a8b2d1",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#64ffda",
      },
    },
  })

  const handleClickResume = () => {
    window.open(
      "https://drive.google.com/file/d/1RnI1mu6CA2VH4tItDwJJAQhLymIWtZTJ/view?usp=share_link",
      "_blank"
    )
  }

  return (
    <Box
      sx={{
        marginX: "120px",
        [createTheme().breakpoints.down("md")]: {
          marginX: "30px",
          display: "block",
          alignItems: "center",
        },
      }}
    >
      <Typography
        color="#64ffda"
        sx={{
          fontFamily: "VT323",
          fontSize: 26,
          paddingTop: 6,
          paddingBottom: 6,
          [createTheme().breakpoints.up("md")]: {
            fontSize: 30,
          },
        }}
      >
        04. Contact
      </Typography>
      <Typography
        color="#ccd6f6"
        sx={{
          textAlign: "center",
          paddingBottom: 3,
          fontSize: 20,
        }}
      >
        Got any suggestions, a potential job lead, or just want to drop a
        friendly hello? Don't hesitate to reach out.
      </Typography>

      <ThemeProvider theme={formTheme}>
        <Box
          sx={{
            display: "block",
            alignItems: "center",
          }}
        >
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              label="Name"
              type="text"
              name="name"
              variant="filled"
              color="secondary"
              InputLabelProps={{ sx: { color: "#64ffda" } }}
              sx={{
                width: "100%",
                marginBottom: "2rem",
                backgroundColor: "#a8b2d1",
              }}
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              variant="filled"
              color="secondary"
              InputLabelProps={{ sx: { color: "#64ffda" } }}
              sx={{
                width: "100%",
                marginBottom: "2rem",
                backgroundColor: "#a8b2d1",
              }}
            />
            <TextField
              label="Subject"
              type="text"
              name="subject"
              variant="filled"
              color="secondary"
              InputLabelProps={{ sx: { color: "#64ffda" } }}
              sx={{
                width: "100%",
                marginBottom: "2rem",
                backgroundColor: "#a8b2d1",
              }}
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              name="message"
              variant="filled"
              color="secondary"
              InputLabelProps={{ sx: { color: "#64ffda" } }}
              sx={{
                width: "100%",
                marginBottom: "2rem",
                backgroundColor: "#a8b2d1",
              }}
            />

            <Button
              type="submit"
              variant="outlined"
              color="secondary"
              sx={{
                display: "flex",
                borderRadius: 0,
                margin: "0 auto",
              }}
            >
              Send
            </Button>
          </form>
        </Box>
      </ThemeProvider>

      <Grid
        container
        spacing={6}
        sx={{
          paddingTop: 6,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={6}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Tooltip title="GitHub" placement="bottom">
            <a href="https://github.com/TalesPinto">
              <img
                src={github}
                alt="github-pragmatic-energy-app"
                style={{ height: "35px" }}
              />
            </a>
          </Tooltip>
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Tooltip title="LinkedIn" placement="bottom">
            <a href="https://www.linkedin.com/in/talesspinto/">
              <img
                src={linkedin}
                alt="github-pragmatic-energy-app"
                style={{ height: "35px" }}
              />
            </a>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  )
}
