import SideNav from "../components/SideNav.jsx";
import Navbar from "../components/Navbar.jsx";
import AccordionDash from "../components/AccordionDash.jsx";
import BarChart from "../charts/BarChatr.jsx";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";
import "../Dash.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

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
              <Grid size={8}>
                <Stack spacing={2} direction='row'>
                  <Card sx={{minWidth: 49 + "%", height: 152}}
                        className="gradient"
                  >
                    <CardContent>
                      <div className="iconstyle">
                        <CreditCardIcon/>
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{color: "#ffffff"}}
                      >
                        $500.00
                      </Typography>
                      <Typography
                        gutterBottom variant="body2"
                        component="div"
                        sx={{color: "#ccd1d1"}}
                      >
                        Total Earnings
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{minWidth: 49 + "%", height: 152}}
                        className="gradientlight"
                  >
                    <CardContent>
                      <div className="iconstyle">
                        <BusinessCenterIcon/>
                      </div>
                      <Typography
                        gutterBottom variant="h5"
                        component="div"
                        sx={{color: "#ffffff"}}
                      >
                        $900.00
                      </Typography>
                      <Typography
                        gutterBottom variant="body2"
                        component="div"
                        sx={{color: "#ccd1d1"}}
                      >
                        Total Orders
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid size={4}>
                <Stack spacing={2}>
                  <Card className="gradientlight">
                    <Stack spacing={2} direction="row">
                      <div className="iconstyle">
                        <StorefrontIcon/>
                      </div>
                      <div className="paddingall" style={{color: "#ccd1d1"}}>
                        <span className="pricetitle" style={{color: '#ffffff'}}>
                          $203k
                        </span>
                        <br/>
                        <span className="pricsubetitle">Total income</span>
                      </div>
                    </Stack>
                  </Card>
                  <Card>
                    <Stack spacing={2} direction="row">
                      <div className="iconstyleblack">
                        <StorefrontIcon/>
                      </div>
                      <div className="paddingall">
                        <span className="pricetitle">
                          $203k
                        </span>
                        <br/>
                        <span className="pricsubetitle">Total income</span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={20}/>
            <Grid container spacing={2}>
              <Grid size={8}>
                <Card sx={{height: 60 + "vh"}}>
                  <CardContent>
                    <BarChart/>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={4}>
                <Card sx={{height: 60 + "vh"}}>
                  <CardContent>
                    <div className="paddingall">
                      <span className="pricetitle">Popular products</span>
                    </div>
                    <AccordionDash/>
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
