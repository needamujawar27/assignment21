import React from "react";
import {Grid,Card,CardContent,Rating} from "@mui/material"

export const ProductItem=({item})=>{
    return(
        <Grid item xs={4}>
            <Card sx={{bgcolor:"lightgray",border:"1px solid black",boxShadow:"5px 5px 5px black",borderRadius:"30px 0 30px 0"}}>
                <CardContent>
                    <img  src={item.image} alt=""/>
                    <h4><b>RS:</b>{item.price}</h4>
                    <p className="b1">10%discount</p>
                    <Rating value={4}/>
                    <h4>{item.title.slice(0,15)}</h4>
                    <p>{item.description.slice(0,35)}</p>
                    
                </CardContent>
            </Card>
        </Grid>
    )
}