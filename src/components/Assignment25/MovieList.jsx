import React,{useState,useEffect} from "react";
import {Grid,Card,CardContent,TextField} from "@mui/material"
import axios from "axios";

export const MovieList=()=>{
    const [data,setData]=useState([])
    const getData=async ()=>{
        const result=await axios.get(" https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
        setData (result.data.slice(0,4)) 
    }
    useEffect(()=>{
     getData();
    },[])
    return(
      <Grid container spacing={2} sx={{bgcolor:"skyblue",marginTop:"10px"}}>
        <Grid item xs={12}>
        <TextField label="Search Here......" variant="outlined" fullWidth></TextField>
        </Grid>
        {
            data.map((item)=>
                    <Grid item xs={3} align=" center">
            <Card sx={{margin:"10px",width:"400px",height:"500px",marginLeft:"10px"}} >
                <CardContent>
                        <img src={item.Poster} alt=""/>
                        <h3>{item.Title}</h3>
                        <h4>{item.Year}</h4>
                </CardContent>
            </Card>
                    </Grid>
            )
        }
      </Grid>
    )
}