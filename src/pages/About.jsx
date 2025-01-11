import SideNav from "../SideNav.jsx";
import Box from "@mui/material/Box";

export default function About() {
  return (
    <>
      <Box sx={{display: 'flex'}}>
        <SideNav/>
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
          <h1>About</h1>
        </Box>
      </Box>
    </>
  )
}
