import React,{useState,useEffect}from "react";
import {Button,TextField,Grid} from "@mui/material"

export const Train=()=>{
    const[data,setData]=useState("");
    const[troll,setTroll]=useState([]);

    useEffect(()=>{

    },[])
    return(
     <Grid container spacing={2}>
        <Grid item xs={8}>
            <TextField onChange={(e)=>setData(e.target.value)} variant="outlined" placeholder="Type Here" fullWidth/>
        </Grid>
        <Grid item xs={4}>
            <Button onClick={()=>setTroll([...troll,data])} variant="contained" fullWidth sx={{height:"55px"}}>Submit</Button>
        </Grid>
        <Grid item xs={2}>
        <img src="img/Train.jpg" alt="" />

        </Grid>
        {
            troll.map((item)=>
            <Grid item xs={item} sx={{marginTop:"30px"}}>
                <img src="img/Engine.jpg" alt=""  width={200} height={180}/>
                
            </Grid>
            )

            
        }
        
     </Grid>
    )
}

