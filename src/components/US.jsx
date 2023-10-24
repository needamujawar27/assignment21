import React,{useState,useEffect}from "react";
import {Grid,Card,CardContent,Button} from "@mui/material"

export const US=()=>{
    const [name,setName]=useState("England");
    const [us,setUs]=useState("");

 useEffect(()=>{
 setUs(`img/${name}.jpg`)
 },[name])
    return(
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Button onClick={()=>setName("England")} variant="contained" color="warning" fullWidth>England</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button onClick={()=>setName("Scotland")} variant="contained" color="warning" fullWidth>Scotland</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button onClick={()=>setName("wales")} variant="contained" color="warning" fullWidth>Wales</Button>
                    </Grid>
                    <Grid item xs={2.5}></Grid>
                    <Grid item xs={7}>
            <Card sx={{boxShadow:"5px 5px 5px black",border:"2px solid black",marginTop:"10px",height:"700px",textAlign:"center"}}>
            <h3 style={{color:"darkgoldenrod",fontWeight:"bolder"}}>{name}</h3> <img src={us} alt={name} height={700} width={1200}/>
                        </Card>
                    </Grid>
                    <Grid item xs={2.5}></Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}