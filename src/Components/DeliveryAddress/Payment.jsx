import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Card, Button, CircularProgress } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useRestaurantContext } from "../../Context/restaurantContext";
import TextField from "@material-ui/core/TextField";
import { addAddress } from "../../actions/customers";
import { useDispatch } from "react-redux";
import { addDeliveryAddress } from "../../api/customers";
import { toast } from "react-toastify";

const useStyles = makeStyles({
    container: {},
    title: {
      fontWeight: "600",
      fontSize: "20px",
    },
    formContainer: {
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      minWidth:"500px"
    },
    btn: {
      height: "40px",
      background: "rgba(16, 185, 129,0.3)",
      border: "1px solid rgba(16, 185, 129)",
      marginTop: "20px",
      "&:hover": {
        background: "rgba(16, 185, 129,0.3)",
      },
      color: "rgba(16, 185, 129)",
      textTransform: "capitalize",
      padding: "20px 50px 20px 50px",
    },
  });

function Payment({setActiveStep}) {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
        <label className={classes.title}>How do you want to pay?</label>
        <Box>
            <label style={{background:"#e1f4f5", display:"flex", padding:"15px", color:"#6969fd", fontWeight:"500"  }} > Credit Card</label>
        </Box>
        <form>
          <Card className={classes.formContainer}>
              <label style={{display:"flex", color:"#6969fd", fontWeight:"500"}}>
                  Credit Card Number
              </label>
            <TextField
              id="outlined-basic"
            
              name="name"
              variant="outlined"
              
              style={{ marginBottom: "20px" }}
            />
            <Box mb='15px' style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <div>
                <label style={{color:"#6969fd", fontWeight:"500"}}>Expiration Date</label>
                </div>
            <TextField
              id="outlined-basic"
              name="phoneNumber"
              variant="outlined"
            style={{width:"120px"}}
            />
             <TextField
              id="outlined-basic"
              style={{width:"120px"}}
              name="phoneNumber"
              variant="outlined"
            
            />
            </Box>

<Box mb='15px' style={{display:"flex", flexDirection:"column"}}>
            <label  style={{color:"#6969fd", fontWeight:"500", display:"flex"}}>Security Number</label>
            <TextField
              id="outlined-basic"
          
              name="addressLine1"
              variant="outlined"
            />
            <label style={{display:"flex", justifyContent:'flex-end', fontSize:"10px", marginTop:"10px"}}>The 3-digit number on the back of the card</label>
            </Box>
           
            <Box mb='15px' style={{display:"flex", flexDirection:"column"}}>
            <label  style={{color:"#6969fd", fontWeight:"500", display:"flex"}}>First Name</label>
            <TextField
              id="outlined-basic"
          
              name="addressLine1"
              variant="outlined"
            />
            </Box>

            <Box mb='15px' style={{display:"flex", flexDirection:"column"}}>
            <label  style={{color:"#6969fd", fontWeight:"500", display:"flex"}}>Sure Name</label>
            <TextField
              id="outlined-basic"
          
              name="addressLine1"
              variant="outlined"
            />
            </Box>
            <Box style={{display:"flex", flexDirection:"column"}}>
                <label style={{fontSize:"10px", color:"grey"}}>Billing Address: WEST GARD HOTEL, Via prais, Padenghe Sul Garda, Province of Brescia, Italy</label>
                <label style={{fontSize:"10px", color:"grey"}}>(Uncheck this box to change the delivery address)</label>

            </Box>
            <Box mt='20px'>
            <label style={{background:"#e1f4f5", display:"flex", padding:"15px", color:"#6969fd", fontWeight:"500"  }} >Pay Pal</label>
        </Box>
        <Box>
            <label style={{background:"#e1f4f5", display:"flex", padding:"15px", color:"#6969fd", fontWeight:"500"  }} >Cash on Delivery</label>
        </Box>
          </Card>
          <Box display="flex" justifyContent="flex-end">
            <Button type="submit" className={classes.btn}>
             
              Continue
            </Button>
          </Box>
        </form>
        
      </Box>
    )
}

export default Payment
