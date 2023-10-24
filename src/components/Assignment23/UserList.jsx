import React, { useEffect,useState} from "react";
import {Table,Grid,TableBody,TableCell,TableContainer,TableHead,TableRow,TextField} from "@mui/material"
import axios from "axios"

export const UserList=()=>{
    const [data,setData]=useState([]);
    const getData=async()=>{
        const result=await axios.get("https://jsonplaceholder.typicode.com/albums");
        setData(result.data);
    };
    useEffect(()=>{
      getData()
    },[]);
    return(
        <Grid container spacing={2}>
            <Grid item xs={12} sx={{textAlign:"center"}}>
                <h2>USER LIST</h2>
            </Grid>
            <Grid item xs={12} sx={{fontWeight:"bolder"}}>
                <TextField label="Search Here...." fullWidth/>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={8} sx={{bgcolor:"pink"}}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" width={100}><b>User Id</b></TableCell>
                                <TableCell align="center"><b>Id</b></TableCell>
                                <TableCell align="center"><b>Title</b></TableCell>
                            </TableRow>
                            </TableHead>
                                {
                                    data.map((item)=>(
                                        <TableBody>
                                        <TableRow>
                                         <TableCell align="center">{item.userId}</TableCell>
                                         <TableCell align="center">{item.id}</TableCell>
                                         <TableCell align="center">{item.title}</TableCell>
                                        </TableRow>
                            </TableBody>
                                    ))
                                }

                    </Table>
                </TableContainer>
            </Grid>
        </Grid>




    )
}