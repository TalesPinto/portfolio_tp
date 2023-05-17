import { Box, Divider, Typography } from "@mui/material"

export default function Footer() {
  return (
    <Box sx={{ marginTop: 6 }}>
      <Divider color="#a8b2d1" orientation="horizontal" flexItem />
      <Typography
        color="#a8b2d1"
        sx={{
          display: "flex",
          fontSize: 16,
          paddingTop: 3,
          paddingBottom: 3,
          justifyContent: "center",
        }}
      >
        © Tales Pinto 2023
      </Typography>
    </Box>
  )
}
