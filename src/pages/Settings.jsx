import SideNav from "../SideNav.jsx";
import Box from "@mui/material/Box";

export default function Settings() {
  return (
    <>
      <Box sx={{display: 'flex'}}>
        <SideNav/>
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
          <h1>Settings</h1>
        </Box>
      </Box>
    </>
  )
}
