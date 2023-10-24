import React, { useEffect,useState } from "react";
import {Grid,Card,CardContent} from "@mui/material"
import axios from "axios";
 
export const Userid=({item})=>{
    const [data,setData]=useState([]);
    const getData=async()=>{
    const result= await axios.get("https://jsonplaceholder.typicode.com/posts")
    setData(result.data.slice(0,4))
    }
    useEffect(()=>{
     getData();
    },[])
    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <h1>Assignment-27</h1>
            </Grid>
            {
                data.map((item)=>
                <Grid item xs={12}>
                <Card sx={{bgcolor:"lightgreen",margin:"5px"}}>
                    <CardContent>
                      <h2>UserId:<span>{item.id}</span></h2>
                      <h4> Title:{item.title}</h4>
                      <p>Description:{item.body}</p>
        
                    </CardContent>
                </Card>
                </Grid>
                )
            }

        </Grid>
    )
}