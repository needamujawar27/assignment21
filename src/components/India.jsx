import React,{useEffect,useState}from "react";
import {Grid,Card,CardContent,Button} from "@mui/material"

 export const India=()=>{
     const [data,setData]=useState("Agra");
     const [place,setPlace]=useState("");

     useEffect(()=>{
      setPlace(`img/${data}.jpg`)
     },[data])
     
    return(
    <Card>
        <CardContent>
            <Grid container spacing={2}>
                <Grid item xs={2.4}>
                    <Button onClick={()=>setData("Agra")} variant="contained" color="error" fullWidth>Agra</Button>
                </Grid>
                <Grid item xs={2.4}>
                    <Button onClick={()=>setData("Rajasthan")} variant="contained" color="error" fullWidth>Rajasthan</Button>
                </Grid>
                <Grid item xs={2.4}>
                    <Button onClick={()=>setData("Delhi")} variant="contained" color="error" fullWidth>Delhi</Button>
                </Grid>
                <Grid item xs={2.4}>
                    <Button onClick={()=>setData("Mumbai")} variant="contained" color="error" fullWidth>Mumbai</Button>
                </Grid>
                <Grid item xs={2.4}>
                    <Button onClick={()=>setData("Goa")} variant="contained" color="error" fullWidth>Goa</Button>
                </Grid>
                <Grid item xs={2.5}></Grid>
                <Grid item xs={7}>
                    <Card style={{boxShadow:"5px 5px 5px black",marginTop:"10px",border:"2px solid black",height:"700px",textAlign:"center"}}>
                           <h3 style={{color:"darkgoldenrod",fontWeight:"bolder"}}>{data}</h3>  <img src={place} alt={data} height={700} width={1200}/>
                            </Card>
                            </Grid>
                            <Grid item xs={2.5}></Grid>
                </Grid>
        </CardContent>
    </Card>
    )
}