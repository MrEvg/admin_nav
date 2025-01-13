import SideNav from "../components/SideNav.jsx";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar.jsx";

export default function Users() {
  return (
    <>
      <Navbar/>
      <Box height={30}/>
      <Box sx={{display: 'flex'}}>
        <SideNav/>
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
          <h1>Users</h1>
        </Box>
      </Box>
    </>
  )
}
