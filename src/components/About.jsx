import { Typography, Box, Grid, createTheme } from "@mui/material"
import tales from "./../tales.jpeg"

export default function About() {
  return (
    <Box
      sx={{
        marginX: "120px",
        [createTheme().breakpoints.down("md")]: {
          marginX: "30px",
        },
      }}
    >
      <Typography
        color="#64ffda"
        sx={{
          fontFamily: "VT323",
          fontSize: 26,
          paddingTop: 12,
          paddingBottom: 6,
          [createTheme().breakpoints.up("md")]: {
            fontSize: 30,
          },
        }}
      >
        01. About
      </Typography>

      <Grid container spacing={6} sx={{ paddingBottom: 6 }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography color="#a8b2d1" sx={{ paddingBottom: 3, fontSize: 20 }}>
              I'm a software engineer based in Sydney with a background in site
              management and civil engineering design. Ever since I was a child,
              I've had a deep passion for programming and technology. I've
              always loved to explore and experiment with new technologies, and
              I find the process of creating innovative solutions to complex
              problems truly exhilarating.
            </Typography>
            <Typography color="#a8b2d1" sx={{ fontSize: 20 }}>
              I believe that software engineering is the perfect field for me to
              combine my passion for problem-solving with my love of technology.
              As a software engineer, I'm constantly learning and expanding my
              knowledge base. I'm excited to use my skills and experience to
              create impactful solutions that make a positive impact on the
              world for real people.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <img
            src={tales}
            alt="profile-photo"
            style={{
              maxWidth: "100%",
              maxHeight: "600px",
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
