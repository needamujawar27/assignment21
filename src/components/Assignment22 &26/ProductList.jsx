import React,{useEffect,useState} from "react";
import {Grid,TextField} from "@mui/material"
import { ProductItem } from "./ProductItem";
import axios from "axios";

export const ProductList=()=>{
    const [data,setData]=useState([]);

    const getData=async()=>{
        const result=await axios.get("https://fakestoreapi.com/products");
        setData(result.data)
    }
    useEffect(()=>{
      getData()
    },[])
    return(
    <Grid container spacing={2} align="center" sx={{marginBottom:3}}>
        <Grid item xs={12}>
            <TextField variant="outlined" placeholder="Search Here" fullWidth></TextField>
        </Grid>
        {
            data.map((item)=>(
                <ProductItem item={item}/>
            ))
        }
    </Grid>
    )
}