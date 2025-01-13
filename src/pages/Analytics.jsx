import SideNav from "../components/SideNav.jsx";
import Navbar from "../components/Navbar.jsx";
import PieChart from "../charts/PieChart.jsx";
import GeoChart from "../charts/GeoChart.jsx";
import HbarChart from "../charts/HbarChart.jsx";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";
import CountUp from "react-countup";
import "../Dash.css";

export default function Home() {
  return (
    <>
      <div className="bgcolor">
        <Navbar/>
        <Box height={70}/>
        <Box sx={{display: 'flex'}}>
          <SideNav/>
          <Box component="main" sx={{flexGrow: 1, p: 3}}>
            <Grid container spacing={2}>
              <Grid size={5}>
                <Stack spacing={2} direction='row'>
                  <Box sx={{width: "50%"}}>
                    <Card sx={{minWidth: 19 + "vh"}}
                          className="gradient"
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{color: "#f0fcfc", padding: "7px 0px"}}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{color: "#f0fcfc"}}
                        >
                          <CountUp delay={0.2} end={24630} duration={1.5}/>
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          color="text.secondary"
                          sx={{color: "#ccd1d1"}}
                        >
                          Since last week
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card sx={{minWidth: 19 + "vh", marginTop: "16px"}}
                          className="gradient"
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          style={{color: "#f0fcfc", padding: "7px 0px"}}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{color: "#f0fcfc"}}
                        >
                          <CountUp delay={0.2} end={28450} duration={1.7}/>
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          color="text.secondary"
                          sx={{color: "#ccd1d1"}}
                        >
                          Since last week
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                  <Box sx={{width: "50%", height: "50%"}}>
                    <Card sx={{minWidth: 19 + "vh"}} className="gradientlight">
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          style={{color: "#f0fcfc", padding: "7px 0px"}}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{color: "#f0fcfc"}}
                        >
                          <CountUp delay={0.2} end={31210} duration={1.9}/>
                        </Typography>
                        <Typography
                          gutterBottom variant="body2"
                          color="text.secondary"
                          sx={{color: "#ccd1d1"}}
                        >
                          Since last week
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card sx={{minWidth: 19 + "vh", marginTop: "16px"}}
                          className="gradientlight"
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          style={{color: "#f0fcfc", padding: "7px 0px"}}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{color: "#f0fcfc"}}
                        >
                          <CountUp delay={0.2} end={27390} duration={1.6}/>
                        </Typography>
                        <Typography
                          gutterBottom variant="body2"
                          color="text.secindary"
                          sx={{color: "#ccd1d1"}}
                        >
                          Since last week
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Stack>
              </Grid>

              <Grid size={7}>
                <Card sx={{height: 40 + "vh"}}>
                  <CardContent>
                    <HbarChart/>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Box height={16}/>
            <Grid container spacing={2}>
              <Grid size={8}>
                <Card sx={{height: 40 + "vh"}}>
                  <CardContent>
                    <GeoChart/>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={4}>
                <Card sx={{height: 40 + "vh"}}>
                  <CardContent>
                    <PieChart/>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  )
}
