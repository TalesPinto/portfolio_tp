import react from "./../icons/react.png"
import js from "./../icons/js.png"
import nodejs from "./../icons/nodejs.png"
import expressjs from "./../icons/expressjs.png"
import psql from "./../icons/psql.png"
import html from "./../icons/html.png"
import css from "./../icons/css.png"
import mui from "./../icons/mui.png"
import bootstrap from "./../icons/bootstrap.png"

import { createTheme, Box, Grid, Typography, Tooltip } from "@mui/material"

export default function Skills() {
  return (
    <Box
      sx={{
        marginX: "120px",
        paddingBottom: 12,
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
          paddingBottom: 6,
          [createTheme().breakpoints.up("md")]: {
            fontSize: 30,
          },
        }}
      >
        02. Skills
      </Typography>
      <Grid container spacing={6} sx={{ textAlign: "center" }}>
        <Grid
          item
          xs={4}
          md={3}
          sx={{
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Tooltip title="React" placement="bottom">
            <img src={react} alt="react" style={{ height: "50px" }} />
          </Tooltip>
        </Grid>
        <Grid
          item
          xs={4}
          md={3}
          sx={{
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Tooltip title="JavaScript" placement="bottom">
            <img src={js} alt="js" style={{ height: "50px" }} />
          </Tooltip>
        </Grid>
        <Grid
          item
          xs={4}
          md={3}
          sx={{
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Tooltip title="Node.js" placement="bottom">
            <img src={nodejs} alt="nodejs" style={{ height: "50px" }} />
          </Tooltip>
        </Grid>
        <Grid
          item
          xs={4}
          md={3}
          sx={{
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Tooltip title="Express.js" placement="bottom">
            <img src={expressjs} alt="expressjs" style={{ height: "50px" }} />
          </Tooltip>
        </Grid>
        <Grid
          item
          xs={4}
          md={3}
          sx={{
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Tooltip title="PostgreSQL" placement="bottom">
            <img src={psql} alt="psql" style={{ height: "50px" }} />
          </Tooltip>
        </Grid>
        <Grid
          item
          xs={4}
          md={3}
          sx={{
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Tooltip title="HTML" placement="bottom">
            <img src={html} alt="html" style={{ height: "50px" }} />
          </Tooltip>
        </Grid>
        <Grid
          item
          xs={4}
          md={3}
          sx={{
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Tooltip title="CSS" placement="bottom">
            <img src={css} alt="css" style={{ height: "50px" }} />
          </Tooltip>
        </Grid>
        <Grid
          item
          xs={4}
          md={3}
          sx={{
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Tooltip title="Material UI" placement="bottom">
            <img src={mui} alt="material-ui" style={{ height: "50px" }} />
          </Tooltip>
        </Grid>
        <Grid
          item
          xs={4}
          md={3}
          sx={{
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Tooltip title="Bootstrap" placement="bottom">
            <img src={bootstrap} alt="bootstrap" style={{ height: "50px" }} />
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  )
}
