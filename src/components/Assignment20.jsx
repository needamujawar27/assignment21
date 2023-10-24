import React, { useEffect, useState } from "react";
import {Card,CardContent,Grid} from "@mui/material"
import Select from "react-select"
import { datas } from "../data";
export const Assignment20=()=>{
    const [data,setData]=useState([]);
    const [bgclr,setBgclr]=useState(datas[0]);

    const handleClr=(selOpt)=>{
        setBgclr(selOpt)
    }
    useEffect(()=>{
     setData([...data,bgclr])
    },[bgclr])

    return(
     <Card sx={{bgcolor:"lightgoldenrodyellow",height:"1500px"}}>
        <CardContent>
            <Grid container spacing={2}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                <Select onChange={(handleClr)} options={datas}></Select>
                {
                    data.map((item)=>
                   <Grid item xs={6} sx={{marginTop:"30px",marginLeft:"250px"}}>
                    <Card sx={{height:"200px",bgcolor:item.label}}>
                        <CardContent>

                        </CardContent>
                    </Card>
                   </Grid>                        
                    )
                }
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </CardContent>
     </Card>
    )
}