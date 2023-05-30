import {
  createTheme,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"

import pragmatic from "./../pragmatic_energy.png"
import taskmaster from "./../taskmaster.png"
import unreal from "./../unreal_estate.png"
import Project from "./Project"

export default function Projects() {
  const description = {
    taskmaster: `This full-stack web application provides a collaborative
    solution for teams to track, manage, and complete tasks. By
    improving communication and facilitating teamwork, it
    streamlines the project management process and makes it easier
    to bring projects to completion.`,
    pragmatic: `A full-stack web application that helps users to find the
    nearest petrol stations based on their current location.
    Additionally, users can browse the map to find petrol stations
    anywhere in Australia, which can save users time and money.`,
    unreal: `A real estate web application that connects property sellers
    with potential buyers. This platform allows buyers to easily
    browse available properties by suburb, while sellers and agents
    can sign up and create, update, or delete property listings.`,
  }

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

          [createTheme().breakpoints.up("md")]: {
            fontSize: 30,
          },
        }}
      >
        03. Projects
      </Typography>

      {isSmallScreen ? (
        <div>
          <Project
            textAlignment="left"
            imgAlignment="right"
            title="TaskMaster"
            description={description.taskmaster}
            githublink="https://github.com/TalesPinto/taskmaster"
            weblink="https://taskmaster-1uk9.onrender.com"
            img={taskmaster}
            alt="taskmaster-img"
            grayScale="grayscale(0%)"
            githubTooltip="TaskMaster GitHub Repository"
            webTooltip="TaskMaster Web Link"
          />
          <Project
            textAlignment="left"
            imgAlignment="right"
            title="Pragmatic Energy"
            description={description.pragmatic}
            githublink="https://github.com/TalesPinto/pragmatic-energy"
            weblink="https://pragmatic-energy.cyclic.app/"
            img={pragmatic}
            alt="pragmatic-energy-img"
            grayScale="grayscale(0%)"
            githubTooltip="Pragmatic Energy GitHub Repository"
            webTooltip="Pragmatic Energy Web Link"
          />
          <Project
            textAlignment="left"
            imgAlignment="right"
            title="Unreal Estate"
            description={description.unreal}
            githublink=""
            weblink=""
            img={unreal}
            alt="unreal-estate-img"
            grayScale="grayscale(100%)"
            githubTooltip="coming soon"
            webTooltip="coming soon"
          />
        </div>
      ) : (
        <div>
          <Project
            textAlignment="right"
            imgAlignment="right"
            title="TaskMaster"
            description={description.taskmaster}
            githublink="https://github.com/TalesPinto/taskmaster"
            weblink="https://taskmaster-1uk9.onrender.com"
            img={taskmaster}
            alt="taskmaster-img"
            grayScale="grayscale(0%)"
            githubTooltip="TaskMaster GitHub Repository"
            webTooltip="TaskMaster Web Link"
          />
          <Project
            textAlignment="left"
            imgAlignment="left"
            title="Pragmatic Energy"
            description={description.pragmatic}
            githublink="https://github.com/TalesPinto/pragmatic-energy"
            weblink="https://pragmatic-energy.cyclic.app/"
            img={pragmatic}
            alt="pragmatic-energy-img"
            grayScale="grayscale(0%)"
            githubTooltip="Pragmatic Energy GitHub Repository"
            webTooltip="Pragmatic Energy Web Link"
          />
          <Project
            textAlignment="right"
            imgAlignment="right"
            title="Unreal Estate"
            description={description.unreal}
            githublink=""
            weblink=""
            img={unreal}
            alt="unreal-estate-img"
            grayScale="grayscale(100%)"
            githubTooltip="coming soon"
            webTooltip="coming soon"
          />
        </div>
      )}
    </Box>
  )
}
