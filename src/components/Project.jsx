import { Box, Grid, Typography, Tooltip, Divider } from "@mui/material"

import github from "./../icons/github.png"
import web from "./../icons/web.png"

export default function Project(props) {
  const textAlignment = props.textAlignment
  const imgAlignment = props.imgAlignment
  const grayScale = props.grayScale
  const githubTooltip = props.githubTooltip
  const webTooltip = props.webTooltip

  return (
    <div>
      <Grid
        container
        spacing={6}
        sx={{ textAlign: textAlignment, paddingBottom: 6, paddingTop: 6 }}
      >
        {imgAlignment === "left" ? (
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <img src={props.img} alt={props.alt} style={{ maxWidth: "100%" }} />
          </Grid>
        ) : (
          <span />
        )}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
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
              {props.title}
            </Typography>
            <Typography color="#a8b2d1" sx={{ fontSize: 20 }}>
              {props.description}
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
                <Tooltip title={githubTooltip} placement="bottom">
                  <Box sx={{ filter: grayScale }}>
                    <a href={props.githublink}>
                      <img
                        src={github}
                        alt="github-app-link"
                        style={{ height: "35px" }}
                      />
                    </a>
                  </Box>
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
                <Tooltip title={webTooltip} placement="bottom">
                  <Box sx={{ filter: grayScale }}>
                    <a href={props.weblink}>
                      <img
                        src={web}
                        alt="weblink-app-link"
                        style={{ height: "35px" }}
                      />
                    </a>
                  </Box>
                </Tooltip>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {imgAlignment === "right" ? (
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <img src={props.img} alt={props.alt} style={{ maxWidth: "100%" }} />
          </Grid>
        ) : (
          <span />
        )}
      </Grid>
    </div>
  )
}
