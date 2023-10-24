import { CardContent,Card,Grid,Button } from "@mui/material";
import React, { useEffect, useState } from "react";

export const Uk=()=>{
    const [name,setName]=useState("NewYork");
    const [city,setCity]=useState("");

    useEffect(()=>{
     setCity(`img/${name}.jpg`)
    },[name])
    return(
        <Card>
        <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Button onClick={()=>setName("NewYork")} variant="contained" color="inherit" fullWidth>NewYork</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button onClick={()=>setName("Washington")} variant="contained" color="inherit" fullWidth>Washington</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button onClick={()=>setName("Wikiki")} variant="contained" color="inherit" fullWidth>Wikiki</Button>
                    </Grid>
                    <Grid item xs={2.5}></Grid>
                    <Grid item xs={7}>
                     <Card sx={{boxShadow:"5px 5px 5px black",border:"2px solid black",height:"700px",textAlign:"center"}}>
            <h3 style={{color:"darkgoldenrod",fontWeight:"bolder"}}>{name}</h3><img src={city} alt={name} height={700} width={1200} />
                        </Card>
                        
                    </Grid>
                    <Grid item xs={2.5}></Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}