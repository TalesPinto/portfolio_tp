import * as React from "react"
import { Link, Element } from "react-scroll"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import { Button } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"

import logo from "./../logo.png"
import Heading from "./Heading"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"

const drawerTheme = createTheme({
  typography: {
    fontFamily: ["VT323", "monospace"].join(","),
    fontSize: "20px",
  },
})

const drawerWidth = 240

function ResponsiveDrawer(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const container =
    props.window !== undefined ? () => props.window().document.body : undefined

  const handleClickResume = () => {
    window.open(
      "https://drive.google.com/file/d/1RnI1mu6CA2VH4tItDwJJAQhLymIWtZTJ/view?usp=share_link",
      "_blank"
    )
  }

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#0a192f",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          ml: {
            sm: `${drawerWidth}px`,
            backgroundColor: "#0a192f",
            height: "100px",
          },
        }}
      >
        <Toolbar>
          <IconButton
            style={{ color: "#64ffda", fontSize: "40px" }}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              flexDirection: "row-reverse",
              mr: 3,
            }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ display: "flex", marginLeft: "auto" }}>
            <Link
              to="heading-id"
              smooth={true}
              duration={500}
              offset={-140}
              style={{ cursor: "pointer" }}
            >
              <Box
                component="img"
                sx={{
                  height: "80px",
                  maxWidth: "100%",
                  marginTop: 2,
                  paddingBottom: 1,
                  paddingRight: "10px",
                }}
                alt="logo"
                src={logo}
              />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <ThemeProvider theme={drawerTheme}>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                color: "#64ffda",
                backgroundColor: "#112240",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                [createTheme().breakpoints.up("md")]: {
                  fontSize: 30,
                },
              },
            }}
          >
            <div>
              <Toolbar />

              <List>
                <ListItem key="01. About" disablePadding>
                  <Link
                    to="about-id"
                    smooth={true}
                    duration={500}
                    offset={-140}
                  >
                    <ListItemButton>
                      <ListItemText primary="01. About" />
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem key="02. Skills" disablePadding>
                  <Link
                    to="skills-id"
                    smooth={true}
                    duration={500}
                    offset={-140}
                  >
                    <ListItemButton>
                      <ListItemText primary="02. Skills" />
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem key="03. Projects" disablePadding>
                  <Link
                    to="projects-id"
                    smooth={true}
                    duration={500}
                    offset={-140}
                  >
                    <ListItemButton>
                      <ListItemText primary="03. Projects" />
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem key="04. Contact" disablePadding>
                  <Link
                    to="contact-id"
                    smooth={true}
                    duration={500}
                    offset={-140}
                  >
                    <ListItemButton>
                      <ListItemText primary="04. Contact" />
                    </ListItemButton>
                  </Link>
                </ListItem>
              </List>
            </div>
            <Button
              variant="outlined"
              onClick={handleClickResume}
              sx={{
                color: "#64ffda",
                borderColor: "#64ffda",
                px: 5,
                "&.MuiButton-root:hover": { borderColor: "#64ffda" },
                borderRadius: 0,
                mt: 10,
                fontSize: 26,
                textTransform: "none",
                [createTheme().breakpoints.up("md")]: {
                  fontSize: 30,
                },
              }}
            >
              Resume
            </Button>
          </Drawer>
        </ThemeProvider>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Element name="heading-id">
          <Heading />
        </Element>
        <Element name="about-id">
          <About />
        </Element>
        <Element name="skills-id">
          <Skills />
        </Element>
        <Element name="projects-id">
          <Projects />
        </Element>
        <Element id="contact-id">
          <Contact />
        </Element>
        <Footer />
      </Box>
    </Box>
  )
}

export default ResponsiveDrawer
