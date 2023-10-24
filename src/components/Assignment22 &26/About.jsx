import React,{useState} from "react";
import {Grid,Card,CardContent,TextField} from "@mui/material"

export const About=()=>{
    const [name,setName]=useState("");
    return(
     <Card sx={{bgcolor:"lightyellow",height:"600px"}}>
        <CardContent>
            <Grid container spacing={2} marginTop={2}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <TextField variant="standard" fullWidth onChange={((e)=>setName(e.target.value))}placeholder="Search Here"></TextField>

                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <Card sx={{bgcolor:"Yellow",marginTop:"40px",height:"200px"}}>
                        <CardContent>
                          <h2>My Name is <span>{name}</span></h2>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </CardContent>
     </Card>
    )
}