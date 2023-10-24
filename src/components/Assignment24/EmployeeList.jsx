import React, { useEffect,useState } from "react";

import {Grid,Card,CardContent} from "@mui/material"
import axios from "axios";


export const EmployeeList=()=>{
    const [data,setData]=useState([]);
    const getData=async()=>{
        const result=await axios.get("https://api.escuelajs.co/api/v1/users")
        setData(result.data.slice(0,3));
    }
    useEffect(()=>{
       getData();
    },[])
    return(
     <Grid container spacing={2}sx={{bgcolor:"orange",height:"650px",marginTop:"30px"}}>
        
        {
            data.map((item)=>
            <Card sx={{width:"500px",height:"600px",marginTop:"25px",marginLeft:"50px"}}>
                <CardContent>
                    <Grid item xs={4}>
                    <img src={item.avatar} alt="" />
                    <h1>{item.name.toUpperCase()}</h1>
                    <h3>{item.role}</h3>
                    <h3>{item.email}</h3>
                    <h3>{item.password}</h3>
                  </Grid>
                </CardContent>
            </Card>

            )
        }
     </Grid>
    )
}