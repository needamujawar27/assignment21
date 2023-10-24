import React,{useState} from "react";
import {Grid,Card,CardContent,TextField} from "@mui/material"

export const Homecard=()=>{
    const [rev,setRev]=useState("")
    const [upper,setUpper]=useState("PICKUP BIZZ")
    const [sq,setSq]=useState("")
    return(
     <Grid container spacing={2} sx={{border:"5px brown inset",margin:"20px",width:"1200px",paddingRight:"20px",paddingBottom:"20px",marginTop:"150px",marginLeft:"120px"}}>
        <Grid item xs={12}>
            <h3>Assignment-03</h3>
        </Grid>
        <Grid item xs={8}>
            <TextField onChange={(e)=>setRev(e.target.value)} variant="outlined" fullWidth label="Reverse Letter"></TextField>
        </Grid>
        <Grid item xs={4}>
            <Card sx={{bgcolor:"brown",height:"55px",color:"white",fontWeight:"bolder"}}>
          <CardContent>
              {rev ? (rev.split('').reverse()) :"reverse"}
              
          </CardContent>
            </Card>
        </Grid>
        <Grid item xs={8}>
            <TextField onChange={(e)=>setUpper(e.target.value)} variant="outlined" label="Convert to UpperCase" fullWidth></TextField>
        </Grid>
        <Grid item xs={4}>
            <Card sx={{bgcolor:"brown",height:"55px",color:"white",fontWeight:"bolder"}}>
            <CardContent>
                {upper.toUpperCase()}
            </CardContent>
            </Card>
        </Grid>
        <Grid item xs={8}>
            <TextField onChange={(e)=>setSq(e.target.value)}variant="outlined" label="Square Number" fullWidth></TextField>
        </Grid>
        <Grid item xs={4}>
            <Card sx={{bgcolor:"brown",height:"55px",color:"white",fontWeight:"bolder"}}>
           <CardContent>
            {sq ?(sq**2):"x^2"}
           </CardContent>
            </Card>
        </Grid>
     </Grid>
    )
}