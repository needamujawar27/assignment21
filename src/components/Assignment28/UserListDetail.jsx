import React, { useEffect, useState } from "react";
import {Grid,Card,CardContent, TextField} from "@mui/material"
import { UserItemDetail } from "./UserItemDetail";
import axios from "axios";

export const UserListDetail=()=>{
    const [data,setData]=useState([])
    const getData=async ()=>{
        const result=await axios.get("https://jsonplaceholder.typicode.com/users")
        setData(result.data)

    }
    useEffect(()=>{
       getData();
    },[])
    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <h2>USER DETAILS</h2>
            </Grid>
            <Grid item xs={12}>
                <TextField variant="outlined" fullWidth placeholder="Serach Here"></TextField>
            </Grid>
            {
                data.map((item)=>
                <Grid item xs={4} >
                <Card sx={{bgcolor:"lightcyan",boxShadow:"5px 5px 5px black"}}>
                    <CardContent>
                        
                        <UserItemDetail item={item}/>
                    </CardContent>
                </Card>
                </Grid>


                )
            }
        </Grid>
    )
}