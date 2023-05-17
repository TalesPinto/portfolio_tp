import {
  createTheme,
  Box,
  Grid,
  Typography,
  Tooltip,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material"

import pragmatic from "./../pragmatic_energy.png"
import taskmaster from "./../taskmaster.png"
import unreal from "./../unreal_estate.png"
import github from "./../icons/github.png"
import web from "./../icons/web.png"

export default function Projects() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"))

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
          paddingBottom: 6,
          [createTheme().breakpoints.up("md")]: {
            fontSize: 30,
          },
        }}
      >
        03. Projects
      </Typography>

      <Grid container spacing={6} sx={{ textAlign: "right", paddingBottom: 3 }}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Divider color="#a8b2d1" orientation="horizontal" flexItem />
            <Typography
              color="#ccd6f6"
              sx={{
                fontFamily: "VT323",
                fontWeight: "600",
                fontSize: 30,
                paddingBottom: 3,
                paddingTop: 3,
              }}
            >
              Pragmatic Energy
            </Typography>
            <Typography color="#a8b2d1" sx={{ fontSize: 20 }}>
              A full-stack web application that helps users to find the nearest
              petrol stations based on their current location. Additionally,
              users can browse the map to find petrol stations anywhere in
              Australia, which can save users time and money.
            </Typography>

            <Grid
              container
              spacing={6}
              sx={{
                paddingTop: 3,
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
                <Tooltip title="Coming soon..." placement="bottom">
                  <img
                    src={github}
                    alt="github-pragmatic-energy-app"
                    style={{ height: "35px" }}
                  />
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
                <Tooltip title="Coming soon..." placement="bottom">
                  <img src={web} alt="web" style={{ height: "35px" }} />
                </Tooltip>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <img
            src={pragmatic}
            alt="pragmatic-energy-web-app"
            style={{ maxWidth: "100%" }}
          />
        </Grid>
      </Grid>

      {isSmallScreen ? (
        <Grid container spacing={6} sx={{ textAlign: "left", paddingTop: 3 }}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Divider color="#a8b2d1" orientation="horizontal" flexItem />
              <Typography
                color="#ccd6f6"
                sx={{
                  fontFamily: "VT323",
                  fontWeight: "600",
                  fontSize: 30,
                  paddingBottom: 3,
                  paddingTop: 3,
                }}
              >
                Unreal Estate
              </Typography>
              <Typography color="#a8b2d1" sx={{ fontSize: 20 }}>
                A Real estate web application that connects property sellers
                with potential buyers. This platform allows buyers to easily
                browse available properties by suburb, while sellers and agents
                can sign up and create, update, or delete property listings.
              </Typography>

              <Grid
                container
                spacing={6}
                sx={{
                  paddingTop: 3,
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
                  <Tooltip title="Coming soon..." placement="bottom">
                    <img
                      src={github}
                      alt="github-pragmatic-energy-app"
                      style={{ height: "35px" }}
                    />
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
                  <Tooltip title="Coming soon..." placement="bottom">
                    <img src={web} alt="web" style={{ height: "35px" }} />
                  </Tooltip>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <img
              src={unreal}
              alt="pragmatic-energy-web-app"
              style={{ maxWidth: "100%" }}
            />
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          spacing={6}
          sx={{ textAlign: "left", paddingBottom: 6, paddingTop: 6 }}
        >
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <img
              src={unreal}
              alt="pragmatic-energy-web-app"
              style={{ maxWidth: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Divider color="#a8b2d1" orientation="horizontal" flexItem />
              <Typography
                color="#ccd6f6"
                sx={{
                  fontFamily: "VT323",
                  fontWeight: "600",
                  fontSize: 30,
                  paddingBottom: 3,
                  paddingTop: 3,
                }}
              >
                Unreal Estate
              </Typography>
              <Typography color="#a8b2d1" sx={{ fontSize: 20 }}>
                A Real estate full-stack web application that connects property
                sellers with potential buyers. This platform allows buyers to
                easily browse available properties by suburb, while sellers and
                agents can sign up and create, update, or delete property
                listings.
              </Typography>

              <Grid
                container
                spacing={6}
                sx={{
                  paddingTop: 3,
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
                  <Tooltip title="Coming soon..." placement="bottom">
                    <img
                      src={github}
                      alt="github-pragmatic-energy-app"
                      style={{ height: "35px" }}
                    />
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
                  <Tooltip title="Coming soon..." placement="bottom">
                    <img src={web} alt="web" style={{ height: "35px" }} />
                  </Tooltip>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      )}

      <Grid container spacing={6} sx={{ textAlign: "right", paddingTop: 6 }}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Divider color="#a8b2d1" orientation="horizontal" flexItem />
            <Typography
              color="#ccd6f6"
              sx={{
                fontFamily: "VT323",
                fontWeight: "600",
                fontSize: 30,
                paddingBottom: 3,
                paddingTop: 3,
              }}
            >
              TaskMaster
            </Typography>

            <Typography color="#a8b2d1" sx={{ fontSize: 20 }}>
              This full-stack web application provides a collaborative solution
              for teams to track, manage, and complete tasks. By improving
              communication and facilitating teamwork, it streamlines the
              project management process and makes it easier to bring projects
              to completion.
            </Typography>

            <Grid
              container
              spacing={6}
              sx={{
                paddingTop: 3,
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
                <Tooltip title="Coming soon..." placement="bottom">
                  <img
                    src={github}
                    alt="github-pragmatic-energy-app"
                    style={{ height: "35px" }}
                  />
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
                <Tooltip title="Coming soon..." placement="bottom">
                  <img src={web} alt="web" style={{ height: "35px" }} />
                </Tooltip>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <img
            src={taskmaster}
            alt="pragmatic-energy-web-app"
            style={{ maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
