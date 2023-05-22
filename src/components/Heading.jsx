import { Typography, Box, Button } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Link } from "react-scroll"

export default function Main() {
  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }
  return (
    <div style={styles.container}>
      <Box>
        <Typography
          color="#64ffda"
          sx={{
            fontFamily: "VT323",
            fontSize: 26,
            paddingTop: 12,
            paddingBottom: 6,
            marginX: "30px",
            [createTheme().breakpoints.up("md")]: {
              fontSize: 30,
              marginX: "60px",
            },
          }}
        >
          Hi, my name is
        </Typography>
        <Typography
          color="#ccd6f6"
          sx={{
            fontFamily: "Inter",
            fontWeight: "600",
            marginX: "30px",
            fontSize: 50,
            [createTheme().breakpoints.up("md")]: {
              fontSize: 80,
              marginX: "60px",
            },
          }}
        >
          Tales Pinto
        </Typography>
        <Typography
          color="#a8b2d1"
          sx={{
            fontFamily: "Inter",
            fontWeight: "600",
            marginX: "30px",
            fontSize: 50,
            [createTheme().breakpoints.up("md")]: {
              fontSize: 80,
              marginX: "60px",
            },
          }}
        >
          I'm a Software Engineer.
        </Typography>
        <Link to="projects-id" smooth={true} duration={500} offset={-140}>
          <Button
            variant="outlined"
            sx={{
              color: "#64ffda",
              borderColor: "#64ffda",
              px: 5,
              marginX: "30px",
              "&.MuiButton-root:hover": { borderColor: "#64ffda" },
              borderRadius: 0,
              mt: 10,
              fontFamily: ["VT323", "monospace"].join(","),
              fontSize: 26,
              textTransform: "none",
              [createTheme().breakpoints.up("md")]: {
                fontSize: 30,
                marginX: "60px",
              },
            }}
          >
            Check out my projects!
          </Button>
        </Link>
      </Box>
    </div>
  )
}
