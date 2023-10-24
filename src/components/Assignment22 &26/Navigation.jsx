import React,{useState}from "react";
import {Grid,Card,CardContent} from "@mui/material"
import { NavData } from "./data";
import { NavigationItem } from "./NavigationItem";

export const Navigation=()=>{ 
    const [data,setData]=useState(NavData);

    return(
        <Card>
            <CardContent>
            <Grid container spacing={2}>
             {
                data.map((item)=>
                 <NavigationItem  item={item}/>
                )
             }
     </Grid>
            </CardContent>
        </Card>
    )
}