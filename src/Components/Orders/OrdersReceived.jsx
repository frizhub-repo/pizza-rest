import React from 'react'
import WizardProcess from './WizardProcess'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Card, Button } from '@material-ui/core';
import Tables from './Tables';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Navbar from "../Navbar";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
    time: {
        marginTop:"2rem",
        fontSize:"2.5rem",
        color:"#fc853a",
        fontWeight:"500"
    },
    timeDescription:{
        fontSize:"1.5rem",
        fontWeight:"500"
    },
    imgContainer:{
        marginTop:"3rem",
        display:"flex",
         justifyContent:"flex-end",
         flexWrap:"wrap",
         [theme.breakpoints.down("sm")]:{
             justifyContent:"center"
         }
    },
    itemContainer:{
        display:"flex",
         flexDirection:"column",
         marginLeft:"1rem",
         fontFamily:"roboto",
         [theme.breakpoints.up("sm")]:{
           
             alignItems:"start",
        }
    },
    detail:{
        display:"flex",
         justifyContent:"space-between",
          padding:"3rem 1rem 0rem 3rem",
         fontFamily:"roboto"
    },
imgContainer1:{
    height:"300px",
     width:"100%",  
      backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat', 
   backgroundImage: `url("https://images.grandsierraresort.com/image/upload/q_auto,f_auto,w_450,c_scale/c_limit,w_1280/v1561401266/Grand-Cafe-food-hero.png")`
}
}));

function OrdersReceived() {
    const classes = useStyles();

    return (
        <>
          <Navbar />
          <WizardProcess />
          <div className={classes.time}>
              18:30
          </div>
          <div className={classes.timeDescription}>
              You requested delivery for
          </div>
          <Grid xs={12} md ={8} lg={8}>
            <Box className={classes.imgContainer}>
                <img src="https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=6&m=1211547141&s=612x612&w=0&h=tIxhZMe51y8LcqcX6u3h0WXDERaxTfuZnqwa9WfvIqw=" 
                alt="cafe interior" width="250" height="250" />
                <div className={classes.itemContainer}>
                <label style={{fontSize:"2rem", fontWeight:"600", marginTop:"2rem"}}>Starters Cafe</label>
                <label style={{fontSize:"1.5rem", color:"grey"}}>Chinese / Thai</label>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <LocationOnIcon style={{height:"30px", width:"30px", marginBottom:"10px", color:"#cadafa"}} />
                <label style={{fontSize:"1.5rem", color:"grey"}}>135 New town wards Roads, Belfast, Bt4</label>
                </div>
                </div>
            </Box>
          </Grid>
          <Grid xs={12} md={8} lg={8}>
              <Box className={classes.detail}>
                  <label style={{fontSize:"1.5rem", fontWeight:"500"}}>Order Detail</label>
                  <label style={{fontSize:"1.1rem", fontWeight:"500", color:"#fc853a"}}>Total: 73,000 €</label>
              </Box>
          </Grid>
          <Grid item container spacing={1}>
          <Grid item xs={12} md={8} lg={8}>
              <Box style={{  padding:"0rem 1rem 3rem 3rem"}}>
              <Tables />
              </Box>
              </Grid>
<Grid item xs={12} md={4} lg={4}>
<Card style={{height:"179px", marginRight:"3rem"}}>
    <Box style={{display:"flex"}}>
    <div style={{height:"179px", width:"100px",display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div>
            <MyLocationIcon style={{height:"40px", width:"40px"}} />
            </div>
    </div>
    <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", justifyContent:"center"}}>
    <label style={{fontWeight:"500", fontSize:"20px"}}>Delivery Address</label>
    <label style={{fontSize:"10px", marginBottom:"0px", fontWeight:"400"}}>WEST GARDA HOTEL, Via Prais, Padhenge sul</label>
    <label style={{fontSize:"10px", fontWeight:"400"}}>Varda, Province of Brescia, italy</label>
    </div>
    </Box>
    </Card>
<Card style={{height:"179px", marginTop:"1rem", marginRight:"3rem"}}>
<Box style={{display:"flex"}}>
    <div style={{height:"179px", width:"100px",display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div>
        <EventNoteRoundedIcon style={{height:"40px", width:"40px"}} />
        </div>
    </div>
    <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", justifyContent:"center"}}>
    <label style={{fontWeight:"500", fontSize:"20px"}}>Your Message</label>
    <label style={{fontSize:"10px", marginBottom:"0px", fontWeight:"400"}}>WEST GARDA HOTEL, Via Prais, Padhenge sul</label>
    <label style={{fontSize:"10px", marginBottom:"0px", fontWeight:"400"}}>lorem ipsum odor dfsfds fdsfds sdffddsf</label>
    <label style={{fontSize:"10px", marginBottom:"0px", fontWeight:"400"}}>lorem ipsum odor dfsfds fdsfds sdffddsf</label>
    <label style={{fontSize:"10px", marginBottom:"0px", fontWeight:"400"}}>lorem ipsum odor dfsfds fdsfds sdffddsf</label>
    </div>
    </Box>
    </Card>
</Grid>
          </Grid>
          <Box className={classes.imgContainer1}>
<Grid container item>
 <Grid xs={3} md={3} lg={3}></Grid>

 <Grid xs={12} md={5} lg={5}>
     <div style={{color:"white", fontFamily:"roboto", marginTop:"4.2rem"}}>
<label style={{fontSize:"2.5rem",  fontWeight:"500", display:"flex"}}>Follow Us</label>
<Box style={{display:"flex", fontWeight:"500", flexDirection:"column"}}>
    <label>lorem ipsum odor consectetur adipiscing elit et volutpat dui bibendum</label>
    <label style={{display:"flex"}}>lorem ipsum odor consectetur adipiscing elit et volutpat dui bibendum</label>
</Box>

<Box style={{display:"flex", justifyContent:"space-between"}}>
<Box style={{display:"flex", marginLeft:"20px"}}>
<div style={{marginRight:"10px"}}>
    <FacebookIcon style={{height:"35px", width:"35px"}} />
</div>
<div style={{marginRight:"10px"}}>
    <InstagramIcon style={{height:"35px", width:"35px"}} />
</div>
<div>
    <TwitterIcon style={{height:"35px", width:"35px"}} />
</div>
</Box>

<Button style={{color:"#f79c2d", fontSize:"12px", border:"1px solid #f79c2d", background:"#ffe8cc", textTransform:"none", width:"200px"}}>Jump to Home</Button>

</Box>

     </div>
 </Grid>

 <Grid xs={4} md={4} lg={4}></Grid>
</Grid>
          </Box>

          <Box style={{display:'flex', justifyContent:"center", height:"200px", alignItems:"center", fontFamily:"roboto"}}>
<label style={{fontWeight:"700", marginRight:"10px", fontSize:"20px" }}>Do you need help?</label>
<label style={{fontWeight:"500", color:"#525254", fontSize:"20px", }}>Call the restaurant at 3555549</label>
<a href="https://www.google.com" style={{marginLeft:"10px", marginBottom:"0.5rem", color:"blue"}}>Check our dedicated section</a>

</Box>


<Footer />
        </>
    )
}

export default OrdersReceived
